// https://www.redditstatic.com/desktop2x/ProfileComments.223c481bd07cb45bc46f.js
// Retrieved at 3/11/2021, 9:20:03 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileComments"], {
		"./src/chat/controls/Svg/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2Qq40Mz_DMe0iARkTh8cZn",
				component: "_2Qq40Mz_DMe0iARkTh8cZn",
				disable: "_2xw21QiaL_ouF76MONf7hF",
				active: "_2dOhVJ6aPS9cbx0JfiKCW8",
				hover: "_1eWUKX11coBa2dErvWkP1q"
			}
		},
		"./src/chat/controls/Svg/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/chat/controls/Svg/index.m.less"),
				l = n.n(i);
			t.a = o.a.wrapped(e => {
				const t = {
						height: e.height || void 0,
						width: e.width || void 0
					},
					{
						disable: n,
						active: r,
						hover: o
					} = e;
				return s.a.createElement("svg", {
					className: Object(a.a)(e.className, {
						[l.a.disable]: n,
						[l.a.active]: r,
						[l.a.hover]: !!o
					}),
					viewBox: e.viewBox,
					style: t
				}, e.children)
			}, "Component", l.a)
		},
		"./src/lib/linkMatchers/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return p
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "j", (function() {
				return f
			})), n.d(t, "a", (function() {
				return w
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "d", (function() {
				return k
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "i", (function() {
				return y
			}));
			var r = n("./node_modules/linkify-it/index.js"),
				s = n.n(r),
				a = n("./node_modules/tlds/index.js"),
				o = n.n(a),
				i = n("./src/lib/linkMatchers/customLinks.ts"),
				l = n("./node_modules/lodash/values.js"),
				c = n.n(l);
			const d = e => c()(i.b).includes(e.substring(1)),
				m = ["//", "ftp:", "http:", "https:", "mailto:"],
				u = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, m),
				p = s()().tlds(o.a).set({
					fuzzyIP: !0
				}),
				b = s()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(i.g.mention.prefix, i.g.mention.config),
				h = u(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(i.g.subreddit.prefix, i.g.subreddit.config).add(i.g.subredditFull.prefix, i.g.subreddit.config),
				f = u(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(i.g.profile.prefix, i.g.profile.config).add(i.g.profileFull.prefix, i.g.profile.config),
				w = s()().tlds(o.a).set({
					fuzzyIP: !0
				}).add(i.g.subreddit.prefix, i.g.subreddit.config).add(i.g.subredditFull.prefix, i.g.subreddit.config).add(i.g.profile.prefix, i.g.profile.config).add(i.g.profileFull.prefix, i.g.profile.config).add(i.g.mention.prefix, i.g.mention.config),
				g = s()().tlds(o.a).set({
					fuzzyIP: !0
				}).add(i.g.subreddit.prefix, i.g.subredditFullUrl.config).add(i.g.subredditFull.prefix, i.g.subredditFullUrl.config),
				x = p.normalize;
			p.normalize = e => {
				x.call(p, e), !e.schema && e.url.startsWith("http:") && (e.url = `https:${e.url.slice(5)}`)
			};
			const _ = (e, t) => {
					return (w.match(e) || []).filter(e => {
						const n = d(e.text);
						return !n || n && t
					})
				},
				k = e => {
					return [...f.match(e) || [], ...b.match(e) || []].map(e => !d(e.text) && e.text.replace(i.a, "")).filter(e => e)
				},
				v = (e, t) => {
					const n = e.match(t);
					if (n && 1 === n.length && 0 === n[0].index && n[0].lastIndex === t.length) return n[0]
				},
				y = e => {
					const t = p.match(e);
					if (t && 1 === t.length && 0 === t[0].index) {
						const n = t[0];
						return n.lastIndex === e.length ? n : ((e, t) => {
							const n = e.substring(t.lastIndex);
							if (/.*\/\/.*\/.*/.test(t.url) && /^(\?|\!)+$/.test(n)) return t.lastIndex += n.length, t.url += n, t
						})(e, n)
					}
				}
		},
		"./src/lib/loginHref/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/config.ts"),
				s = n("./node_modules/history/esm/history.js");
			t.a = (e, t, n) => {
				const a = Object(s.e)(e),
					o = encodeURIComponent(`${t}${a}`);
				return `${r.a.accountManagerOrigin}${n||"/login"}?dest=${o}`
			}
		},
		"./src/reddit/actions/pages/profileComments/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "profileCommentsPending", (function() {
				return L
			})), n.d(t, "profileCommentsLoaded", (function() {
				return I
			})), n.d(t, "profileCommentsFailed", (function() {
				return T
			})), n.d(t, "profileCommentsRequested", (function() {
				return R
			})), n.d(t, "moreItemsPending", (function() {
				return D
			})), n.d(t, "moreItemsLoaded", (function() {
				return B
			})), n.d(t, "moreItemsFailed", (function() {
				return U
			})), n.d(t, "moreItemsRequested", (function() {
				return A
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/lodash/difference.js"),
				s = n.n(r),
				a = n("./node_modules/lodash/pick.js"),
				o = n.n(a),
				i = n("./src/lib/makeActionCreator/index.ts"),
				l = n("./src/lib/makeListingKey/index.ts"),
				c = n("./src/reddit/actions/contentGate.ts"),
				d = n("./src/reddit/actions/externalAccount.ts"),
				m = n("./src/reddit/actions/moderatingSubreddits.ts"),
				u = n("./src/reddit/actions/pages/profileShared.ts"),
				p = n("./src/reddit/actions/platform.ts"),
				b = n("./src/reddit/actions/profile/index.ts"),
				h = n("./src/reddit/actions/subreddit.ts"),
				f = n("./src/reddit/constants/errors.ts"),
				w = n("./src/reddit/constants/parameters.ts"),
				g = n("./src/reddit/contexts/PageLayer/index.tsx"),
				x = n("./src/config.ts"),
				_ = n("./src/lib/addAllowQuarantinedParam/index.ts"),
				k = n("./src/lib/constants/index.ts"),
				v = n("./src/lib/makeApiRequest/index.ts"),
				y = n("./src/reddit/models/Comment/addProfileImgParam.ts"),
				O = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const C = (e, t, n, r) => {
				let s = Object(_.a)(Object(O.a)(`${x.a.gatewayUrl}/desktopapi/v1/user/${t}/comments`));
				return r && (s = Object(y.a)(s)), Object(v.a)(e, {
					data: n,
					endpoint: s,
					method: k.cb.GET
				})
			};
			var E = n("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				S = n("./src/reddit/helpers/timeApiRoute/index.ts"),
				j = n("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				P = n("./src/reddit/selectors/profileComments.ts"),
				N = n("./src/reddit/actions/pages/profileComments/constants.ts");
			const L = Object(i.a)(N.f),
				I = Object(i.a)(N.e),
				T = Object(i.a)(N.d),
				R = e => async (t, n, r) => {
					const {
						queryParams: s,
						params: a
					} = e, {
						sort: i,
						t: g
					} = Object(u.b)(s), {
						profileName: x
					} = a, _ = Object(l.a)(`u_${x}`, i, e.queryParams), {
						profileCommentsPage: k
					} = n(), v = k.commentIds[_], y = k.api.error[_], O = k.api.pending[_];
					if (await t(b.d(x)), O || v && !y) return;
					const P = {
						...o()(e.queryParams, [...w.l, w.h]),
						sort: i,
						t: Object(E.a)(i, g)
					};
					t(L({
						key: _
					}));
					const N = await Object(S.a)("profileComments", () => C(r.apiContext(), x, P, Object(j.a)(n())));
					if (!N.ok) return t(T({
						account: N.body.data ? N.body.data.account : null,
						error: N.body.reason ? {
							type: N.body.reason
						} : N.error,
						key: _
					})), N.body.reason === f.a.DeletedProfile && t(Object(c.p)({
						profileName: x
					})), void t(p.l(N.status));
					const R = N.body;
					t(I({
						key: _,
						meta: n().meta,
						...R
					})), await Promise.all([t(Object(u.c)(x)), t(Object(h.q)()), t(Object(m.b)()), t(d.o(x))])
				}, D = Object(i.a)(N.c), B = Object(i.a)(N.b), U = Object(i.a)(N.a), A = () => async (e, t, {
					apiContext: n
				}) => {
					const r = t(),
						{
							currentPage: a
						} = r.platform;
					if (!a || !a.routeMatch) return;
					const {
						queryParams: i,
						params: c
					} = a.routeMatch.match, {
						sort: d,
						t: m
					} = Object(u.b)(i), {
						profileName: p
					} = c, b = Object(l.a)(`u_${p}`, d, i), h = Object(P.d)(r, {
						listingKey: b
					});
					if (!h) return;
					const f = Object(P.b)(r, {
							listingKey: b
						}),
						x = Object(P.c)(r, {
							listingKey: b
						}),
						_ = x && x[h.token];
					if (f || _) return;
					e(D({
						key: b,
						fetchedToken: h.token
					}));
					const k = await C(n(), p, {
						after: h.token,
						dist: h.dist,
						sort: d,
						t: m,
						...o()(i, w.l),
						layout: Object(g.O)(r, {}).toLowerCase()
					}, Object(j.a)(r));
					if (k.ok) {
						const t = Object(P.f)(r, {
								listingKey: b
							}),
							n = {
								...k.body,
								commentIds: s()(k.body.commentIds, t)
							};
						e(B({
							fetchedToken: h.token,
							key: b,
							meta: r.meta,
							...n
						}))
					} else e(U({
						account: k.body.data ? k.body.data.account : null,
						error: k.error,
						fetchedToken: h.token,
						key: b
					}))
				}
		},
		"./src/reddit/components/ContentGate/index.m.less": function(e, t, n) {
			e.exports = {
				ButtonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				buttonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				Container: "_32zGs4bO3IunZfS9bSJY0_",
				container: "_32zGs4bO3IunZfS9bSJY0_",
				Description: "_3VTI5BOpJO70xoBKSqz3O9",
				description: "_3VTI5BOpJO70xoBKSqz3O9",
				PrivateSubredditDetails: "vpktIvfG7wrc27Xk4Gk-C",
				privateSubredditDetails: "vpktIvfG7wrc27Xk4Gk-C",
				PrivateSubredditDescription: "_2uXliuchCWW0MYUGS_Ks6v",
				privateSubredditDescription: "_2uXliuchCWW0MYUGS_Ks6v",
				PrivateSubredditName: "_3boUKJ5E--k1_9nH886_Wr",
				privateSubredditName: "_3boUKJ5E--k1_9nH886_Wr",
				Link: "o4oSRcSrppMzf__hxJKxn",
				link: "o4oSRcSrppMzf__hxJKxn",
				LinkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				linkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				LinkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
				linkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
				SecondaryLinkRouterButton: "rDOqrXOt4-jCKENSEQG_N",
				secondaryLinkRouterButton: "rDOqrXOt4-jCKENSEQG_N",
				SecondaryLinkButton: "i2sTp1duDdXdwoKi1l8ED",
				secondaryLinkButton: "i2sTp1duDdXdwoKi1l8ED",
				GoHomeLinkButton: "_3goHjUTM8-J0xINP6EoZkZ",
				goHomeLinkButton: "_3goHjUTM8-J0xINP6EoZkZ",
				PrivateKey: "kwHMAzQCDA69TaL3eHZLa",
				privateKey: "kwHMAzQCDA69TaL3eHZLa",
				Image: "_1jefpljVGT-eHObg40F8Dm",
				image: "_1jefpljVGT-eHObg40F8Dm",
				ImagePlaceholder: "yIkP2FaSTqFA_kLFyyH1d",
				imagePlaceholder: "yIkP2FaSTqFA_kLFyyH1d",
				LeftLinkButton: "_3cs2bzZ9PGS1kcZc2r7vdP",
				leftLinkButton: "_3cs2bzZ9PGS1kcZc2r7vdP",
				LeftLinkRouterButton: "_2V3wnL5o-KBHbU_hs7cMof",
				leftLinkRouterButton: "_2V3wnL5o-KBHbU_hs7cMof",
				SecondaryLeftLinkButton: "_3t2KyZopmra_0R16z-1xwr",
				secondaryLeftLinkButton: "_3t2KyZopmra_0R16z-1xwr",
				SecondaryLeftLinkRouterButton: "y7s2WWxfdEzMhMm2mjo-G",
				secondaryLeftLinkRouterButton: "y7s2WWxfdEzMhMm2mjo-G",
				Title: "_2XKLlvmuqdor3RvVbYZfgz",
				title: "_2XKLlvmuqdor3RvVbYZfgz",
				PageBody: "bDDEX4BSkswHAG_45VkFB",
				pageBody: "bDDEX4BSkswHAG_45VkFB",
				QuarantineMessageWrapper: "_3wi4h3DGgmtUEzxlHDUM0n",
				quarantineMessageWrapper: "_3wi4h3DGgmtUEzxlHDUM0n"
			}
		},
		"./src/reddit/components/ContentGate/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./src/config.ts"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router/esm/react-router.js"),
				l = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/lib/loginHref/index.ts"),
				m = n("./src/reddit/actions/contentGate.ts"),
				u = n("./src/reddit/actions/preferences.ts"),
				p = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				b = n("./src/reddit/components/Footer/index.m.less"),
				h = n.n(b);
			const {
				fbt: f
			} = n("./node_modules/fbt/lib/FbtPublic.js"), w = c.a.div("FooterContainer", h.a), g = c.a.div("UserAgreement", h.a), x = c.a.a("UserAgreementLink", h.a), _ = c.a.a("PrivacyLink", h.a);
			var k = () => a.a.createElement(w, null, a.a.createElement(g, null, f._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy} . ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [f._param("=User Agreement", a.a.createElement(x, {
					href: `${r.a.redditUrl}/help/useragreement`
				}, f._("User Agreement", null, {
					hk: "2srkM2"
				}))), f._param("=Privacy Policy", a.a.createElement(_, {
					href: `${r.a.redditUrl}/help/privacypolicy`
				}, f._("Privacy Policy", null, {
					hk: "2nBcYA"
				}))), f._param("year", (new Date).getFullYear())], {
					hk: "335pdO"
				}))),
				v = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				y = n("./src/reddit/components/RichTextJson/index.tsx"),
				O = n("./node_modules/lodash/flatMap.js"),
				C = n.n(O),
				E = n("./src/lib/linkMatchers/index.ts"),
				S = n("./src/lib/linkMatchers/customLinks.ts"),
				j = n("./src/reddit/controls/OutboundLink/index.tsx");
			const P = /\[(.+?)\]\((.+?)\)/g,
				N = e => {
					const t = e.split(P);
					if (1 === t.length) return [e];
					const n = [];
					for (let r = 0; r < t.length; r += 3) {
						const [e, s, a] = t.slice(r, r + 3);
						n.push(e), n.push([a, s])
					}
					return n
				};
			var L = a.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = C()(t, N)), e.parseRegularLinks && (t = C()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = E.f.add(S.g.subreddit.prefix, S.g.subreddit.config).match(e);
						if (!t) return [e];
						const n = [];
						let r = null;
						for (const s of t) n.push(e.slice(r ? r.lastIndex : 0, s.index)), r = s, n.push([s.url, s.text]);
						return r && n.push(e.slice(r.lastIndex)), n
					})(e))), a.a.createElement(a.a.Fragment, null, " ", t.map((t, n) => {
						if (Array.isArray(t)) {
							const [r, s] = t;
							return a.a.createElement(j.b, {
								className: e.linkClassName,
								href: r,
								isSponsored: !1,
								key: n,
								source: null
							}, s)
						}
						return a.a.createElement("span", {
							key: n
						}, t)
					}), " ")
				}),
				I = n("./src/reddit/contexts/PageLayer/index.tsx"),
				T = n("./src/reddit/controls/Button/index.tsx"),
				R = n("./src/chat/controls/Svg/index.tsx");

			function D() {
				return (D = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var B = e => a.a.createElement(R.a, D({}, e, {
					viewBox: "-1 -1 21 21"
				}), a.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				U = n("./src/reddit/models/ContentGate.ts"),
				A = n("./src/reddit/selectors/meta.ts"),
				F = n("./src/reddit/selectors/user.ts"),
				M = n("./src/reddit/components/ContentGate/index.m.less"),
				H = n.n(M);
			const {
				fbt: z
			} = n("./node_modules/fbt/lib/FbtPublic.js"), G = c.a.wrapped(B, "PrivateKey", H.a), W = c.a.div("ButtonsContainer", H.a), q = c.a.div("Container", H.a), K = c.a.div("Description", H.a), Y = c.a.div("PrivateSubredditDetails", H.a), Z = c.a.div("PrivateSubredditDescription", H.a), V = c.a.h3("PrivateSubredditName", H.a), J = c.a.a("Link", H.a), X = c.a.wrapped(T.k, "LinkRouterButton", H.a), Q = c.a.wrapped(T.j, "LinkButton", H.a), $ = c.a.wrapped(T.n, "SecondaryLinkRouterButton", H.a), ee = c.a.wrapped(T.m, "SecondaryLinkButton", H.a), te = c.a.wrapped(X, "GoHomeLinkButton", H.a), ne = c.a.img("Image", H.a), re = c.a.img("ImagePlaceholder", H.a), se = c.a.wrapped(X, "LeftLinkRouterButton", H.a), ae = c.a.wrapped(Q, "LeftLinkButton", H.a), oe = c.a.wrapped(ee, "SecondaryLeftLinkButton", H.a), ie = c.a.wrapped($, "SecondaryLeftLinkRouterButton", H.a), le = c.a.h3("Title", H.a), ce = c.a.div("PageBody", H.a), de = c.a.div("QuarantineMessageWrapper", H.a), me = Object(l.c)({
				isLoggedIn: F.J,
				origin: A.l,
				user: F.j
			}), ue = Object(I.t)(), pe = Object(o.b)(me, (e, {
				subredditName: t
			}) => ({
				continueToQuarantinedSubreddit: async () => {
					await e(u.C(t)), window.location.reload()
				},
				setNSFWPreference: async () => {
					await e(Object(m.l)())
				}
			})), be = e => {
				const {
					banMessage: t,
					contentGateType: n,
					continueToQuarantinedSubreddit: s,
					isLoggedIn: o,
					location: i,
					origin: l,
					pageLayer: c,
					quarantineRequiresEmail: u,
					quarantineMessage: b,
					quarantineMessageHtml: h,
					quarantineMessageRTJson: f,
					setNSFWPreference: w,
					subredditDescription: g,
					subredditName: x,
					user: _
				} = e, k = async () => {
					o ? await w() : await Object(m.k)(), window.location.reload()
				};
				switch (n) {
					case U.a.GoldSubreddit:
						return a.a.createElement("div", null, a.a.createElement(ne, {
							src: `${r.a.assetPath}/img/gold/premium-crest.png`
						}), a.a.createElement(le, null, z._("r/{community name} is a Reddit Premium community", [z._param("community name", x)], {
							hk: "2lyDwB"
						})), a.a.createElement(K, null, z._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), a.a.createElement(W, null, _ ? a.a.createElement(oe, {
							href: `${r.a.redditUrl}/premium`
						}, z._("Get Premium", null, {
							hk: "3ChWi4"
						})) : a.a.createElement(ae, {
							href: Object(d.a)(i, l)
						}, z._("Sign Up", null, {
							hk: "rvpjy"
						})), _ ? a.a.createElement(X, {
							to: "/"
						}, z._("Go Home", null, {
							hk: "49p4or"
						})) : a.a.createElement(ee, {
							href: Object(d.a)(i, l)
						}, z._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case U.a.Nsfw:
					case U.a.NsfwCustomFeed:
						return a.a.createElement("div", null, a.a.createElement(ne, {
							src: `${r.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), a.a.createElement(le, null, n === U.a.Nsfw ? z._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : z._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), a.a.createElement(K, null, z._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), a.a.createElement(W, null, a.a.createElement(se, {
							to: "/"
						}, z._("No", null, {
							hk: "3fMglW"
						})), a.a.createElement(ee, {
							onClick: k
						}, z._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case U.a.PrivateSubreddit:
						return a.a.createElement("div", null, a.a.createElement(G, null), a.a.createElement(le, null, "r/", x, " ", z._("is a private community", null, {
							hk: "7zZmq"
						})), g && g.length && a.a.createElement(Y, null, a.a.createElement(V, null, "r/", x), a.a.createElement(Z, null, a.a.createElement("div", null, g))), a.a.createElement(K, null, z._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", x, " ", z._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), a.a.createElement("br", null), z._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), a.a.createElement(W, null, _ ? a.a.createElement(oe, {
							href: `${r.a.redditUrl}/message/compose?to=/r/${x}`
						}, z._("Message Mods", null, {
							hk: "vVe1i"
						})) : a.a.createElement(oe, {
							href: Object(d.a)(i, l)
						}, z._("Sign Up", null, {
							hk: "rvpjy"
						})), a.a.createElement(X, {
							to: "/"
						}, z._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))));
					case U.a.QuarantinedSubreddit:
						return a.a.createElement("div", null, a.a.createElement(ne, {
							src: `${r.a.assetPath}/img/content-gate-icons/quarantined.png`
						}), a.a.createElement(le, null, z._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), a.a.createElement(K, null, z._("This community is {=quarantined}", [z._param("=quarantined", a.a.createElement(J, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, z._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), a.a.createElement(de, null, f ? a.a.createElement(y.a, {
							content: f,
							rtJsonElementProps: {
								pageLayer: c
							}
						}) : h ? a.a.createElement(v.a, {
							html: h
						}) : b || z._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), z._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), a.a.createElement(W, null, ((e, t, n) => {
							return !(e && e.hasVerifiedEmail) && n ? a.a.createElement(W, null, a.a.createElement(ie, {
								to: "/"
							}, z._("No Thank You", null, {
								hk: "4B26AR"
							})), a.a.createElement(Q, {
								href: `${r.a.redditUrl}/prefs/update`
							}, z._("Verify Email", null, {
								hk: "1893cq"
							}))) : a.a.createElement(W, null, a.a.createElement(se, {
								to: "/"
							}, z._("No Thank You", null, {
								hk: "4B26AR"
							})), a.a.createElement(ee, {
								onClick: t
							}, z._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(_, s, u)));
					case U.a.SubredditBanned:
						return a.a.createElement("div", null, a.a.createElement(ne, {
							src: `${r.a.assetPath}/img/content-gate-icons/banned.png`
						}), a.a.createElement(le, null, z._("r/{community name} has been banned from Reddit", [z._param("community name", x)], {
							hk: "2at9Se"
						})), (e => a.a.createElement(K, null, e ? a.a.createElement(L, {
							linkClassName: H.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : z._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), a.a.createElement(W, null, a.a.createElement(X, {
							to: "/"
						}, z._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case U.a.SubredditBlockedForLegalReason:
						return a.a.createElement("div", null, a.a.createElement(ne, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), a.a.createElement(le, null, z._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), a.a.createElement(W, null, a.a.createElement(X, {
							to: "/"
						}, z._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case U.a.SubredditDoesNotExist:
						return a.a.createElement("div", null, a.a.createElement(re, null), a.a.createElement(le, null, z._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), a.a.createElement(K, null, z._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), a.a.createElement(W, null, _ && a.a.createElement(p.a, {
							eventSource: "content_gate"
						}), a.a.createElement(te, {
							to: "/"
						}, z._("Go Home", null, {
							hk: "49p4or"
						}))));
					case U.a.ProfileDoesNotExist:
					case U.a.ProfileDeleted:
					case U.a.ProfileSuspended:
					case U.a.ProfileBlockedForLegalReason:
						return a.a.createElement("div", null, a.a.createElement(ne, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), a.a.createElement(le, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case U.a.ProfileBlockedForLegalReason:
									return z._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case U.a.ProfileDeleted:
									return z._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case U.a.ProfileSuspended:
									return a.a.createElement(a.a.Fragment, null, z._("This account has been {=suspended} .", [z._param("=suspended", a.a.createElement(J, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, z._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case U.a.ProfileDoesNotExist:
									return a.a.createElement(a.a.Fragment, null, a.a.createElement(le, null, z._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), a.a.createElement(K, null, z._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), a.a.createElement(W, null, a.a.createElement(te, {
							to: "/"
						}, z._("Go Home", null, {
							hk: "49p4or"
						}))));
					case U.a.CustomFeedDoesNotExist:
						return a.a.createElement("div", null, a.a.createElement(ne, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), a.a.createElement(le, null, z._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), a.a.createElement(W, null, a.a.createElement(te, {
							to: "/"
						}, z._("Go Home", null, {
							hk: "49p4or"
						}))));
					case U.a.PostBlockedForLegalReason:
						return a.a.createElement("div", null, a.a.createElement(ne, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), a.a.createElement(le, null, z._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), a.a.createElement(W, null, a.a.createElement(X, {
							to: "/"
						}, z._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = ue(pe(Object(i.i)(e => a.a.createElement(q, null, a.a.createElement("div", null, a.a.createElement(ce, null, be(e))), a.a.createElement(k, null)))))
		},
		"./src/reddit/components/CountrySort/index.m.less": function(e, t, n) {
			e.exports = {
				countrySort: "_1JaK9h42mq2UXvugO7VriI"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.m.less": function(e, t, n) {
			e.exports = {
				StyledTooltip: "FIYolDqalszTnjjNfThfT",
				styledTooltip: "FIYolDqalszTnjjNfThfT"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				l = n("./src/reddit/actions/tooltip.ts"),
				c = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/helpers/overlay/index.ts"),
				p = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				b = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				f = n.n(h),
				w = n("./src/lib/lessComponent.tsx");
			const g = "create-community-button",
				x = w.a.wrapped(c.c, "StyledTooltip", f.a),
				_ = Object(i.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(b.gb)(e),
					userIsSuspended: b.P
				});
			t.a = Object(o.b)(_, (e, {
				eventSource: t
			}) => ({
				openCommunityCreation: n => {
					n(Object(p.b)(t)), e(Object(u.a)("/subreddits/create"))
				},
				onShowTooltip: () => e(Object(l.f)({
					tooltipId: g
				})),
				onHideTooltip: () => e(Object(l.i)())
			}))(Object(d.c)(({
				className: e,
				eventSource: t,
				onShowTooltip: n,
				onHideTooltip: s,
				openCommunityCreation: o,
				sendEvent: i,
				userDoesNotHaveEnoughExpToCreateCommunity: l,
				userIsSuspended: c
			}) => a.a.createElement(m.l, {
				className: e,
				disabled: c || l,
				onClick: () => o(i),
				onMouseEnter: n,
				onMouseLeave: s,
				id: g,
				isFullWidth: !0
			}, r.fbt._("Create Community", null, {
				hk: "RLA8A"
			}), l ? a.a.createElement(x, {
				caretOnTop: !0,
				tooltipId: g,
				text: r.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
					hk: "2R1OXu"
				})
			}) : c ? a.a.createElement(x, {
				caretOnTop: !0,
				tooltipId: g,
				text: r.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
					hk: "2xBDEw"
				})
			}) : null)))
		},
		"./src/reddit/components/Footer/index.m.less": function(e, t, n) {
			e.exports = {
				FooterContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				footerContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				UserAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				userAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				PrivacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				privacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				UserAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh",
				userAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_2ZvnlxtjA4YPENO_OgH0Pw",
				container: "_2ZvnlxtjA4YPENO_OgH0Pw",
				Title: "_6Sb8zEFmf-xF6UJ5SowYB",
				title: "_6Sb8zEFmf-xF6UJ5SowYB",
				DropdownContainer: "U2iuzTD5-OeYSFP8fg9ky",
				dropdownContainer: "U2iuzTD5-OeYSFP8fg9ky",
				LayoutItem: "_1F02c6Yw0dfhdWwl99UrYn",
				layoutItem: "_1F02c6Yw0dfhdWwl99UrYn",
				LayoutItemIconWrapper: "_1WRDpeSLbiEc03Pp3Nh9H1",
				layoutItemIconWrapper: "_1WRDpeSLbiEc03Pp3Nh9H1",
				LayoutItemTextClassName: "PEJfazq4pplDD3Ti9Yaj3",
				layoutItemTextClassName: "PEJfazq4pplDD3Ti9Yaj3",
				Dropdown: "_3R-HO3gwoomy9obdIHmDLx",
				dropdown: "_3R-HO3gwoomy9obdIHmDLx",
				selected: "_1fiOgAxLiYfEU41C1NOX9B",
				LayoutIcon: "_2ONLRjLuDplXKbcaS8dGe_",
				layoutIcon: "_2ONLRjLuDplXKbcaS8dGe_"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				l = n("./src/higherOrderComponents/asTooltip.tsx"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = n("./src/reddit/actions/preferences.ts"),
				u = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/constants/postLayout.ts"),
				h = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/contexts/Tooltip.ts"),
				w = n("./src/reddit/controls/Dropdown/index.tsx"),
				g = n("./src/reddit/controls/Dropdown/Row.tsx"),
				x = n("./src/reddit/icons/fonts/index.tsx"),
				_ = n("./src/reddit/icons/svgs/ClassicPosts/index.tsx"),
				k = n("./src/reddit/icons/svgs/CompactPosts/index.tsx"),
				v = n("./src/reddit/icons/svgs/LargePosts/index.tsx"),
				y = n("./src/reddit/selectors/experiments/coreStyles.ts"),
				O = n("./src/reddit/selectors/telemetry.ts"),
				C = n("./src/reddit/selectors/tooltip.ts"),
				E = n("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				S = n.n(E);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const P = "view--layout--FUE",
				N = "LayoutSwitch--picker",
				L = Object(l.a)(w.a),
				I = {
					[b.d.Card]: v.a,
					[b.d.Classic]: _.a,
					[b.d.Compact]: k.a
				},
				T = {
					[b.d.Card]: function(e) {
						return a.a.createElement(x.a, j({}, e, {
							name: "view_card"
						}))
					},
					[b.d.Classic]: function(e) {
						return a.a.createElement(x.a, j({}, e, {
							name: "view_classic"
						}))
					},
					[b.d.Compact]: function(e) {
						return a.a.createElement(x.a, j({}, e, {
							name: "view_compact"
						}))
					}
				},
				R = {
					[b.d.Card]: () => r.fbt._("card", null, {
						hk: "4qOOHu"
					}),
					[b.d.Classic]: () => r.fbt._("classic", null, {
						hk: "1tiTtA"
					}),
					[b.d.Compact]: () => r.fbt._("compact", null, {
						hk: "1N7pcz"
					})
				},
				D = Object(h.t)(),
				B = Object(i.c)({
					dropdownIsOpen: Object(C.b)(N),
					isInIcons2020: y.a,
					postLayout: h.O,
					redditStyle: h.A
				}),
				U = Object(o.b)(B, e => ({
					onListingLayoutChange: (t, n) => e(Object(m.x)(t, n)),
					openDropdown: () => e(Object(u.h)({
						tooltipId: N
					}))
				}));
			class A extends a.a.Component {
				constructor() {
					super(...arguments), this.changeLayout = e => {
						const {
							onChange: t,
							onListingLayoutChange: n,
							sendEvent: r,
							subredditId: s
						} = this.props;
						t ? t(e) : (n(e, s), r(t => ({
							source: "layout_switch",
							action: "click",
							noun: e,
							screen: Object(O.screen)(t),
							subreddit: Object(O.subreddit)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							isInIcons2020: n,
							layout: r,
							onLayoutClick: s,
							postLayout: o
						} = this.props, i = r || b.e[o], l = e === i, d = n ? T[e] : I[e], m = R[e];
						return a.a.createElement(g.b, j({}, t, {
							className: Object(c.a)(S.a.LayoutItem, {
								[S.a.selected]: l
							}),
							"data-layout": e,
							displayText: m(),
							iconWrapperClassName: S.a.LayoutItemIconWrapper,
							isSelected: l,
							noHover: l,
							onClick: l ? void 0 : () => this.changeLayout(e),
							textClassName: S.a.LayoutItemTextClassName
						}), a.a.createElement(d, {
							className: S.a.LayoutIcon,
							onClick: l ? void 0 : s,
							isFilled: n && l && (!t || !1 !== t.forceIconFill)
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return a.a.createElement(L, j({}, e, {
							className: S.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: S.a.DropdownRow,
							rowIconClassName: S.a.DropdownRowIcon,
							rowSelectedClassName: S.a.DropdownRowSelected,
							tooltipId: N
						}), this.renderItem(b.d.Card), this.renderItem(b.d.Classic), this.renderItem(b.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: n,
						postLayout: r
					} = this.props, s = t || b.e[r];
					return a.a.createElement("div", {
						className: Object(c.a)(S.a.Container, e),
						id: P
					}, a.a.createElement("div", {
						className: S.a.DropdownContainer,
						onClick: n
					}, this.renderItem(s, {
						id: N,
						showDropdownTriangle: !0,
						forceIconFill: !1
					}), a.a.createElement(f.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = D(U(Object(p.c)(Object(d.a)(A))))
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less": function(e, t, n) {
			e.exports = {
				SortDropdown: "tsl4Q1J90HdQwt_L2rJC9",
				sortDropdown: "tsl4Q1J90HdQwt_L2rJC9",
				SortButtons: "_2pUO1Sfe7WlIHvq6goN3Pz",
				sortButtons: "_2pUO1Sfe7WlIHvq6goN3Pz",
				SortIcon: "_2bDYspp_i6ETGHhD6zIa94",
				sortIcon: "_2bDYspp_i6ETGHhD6zIa94",
				SortLink: "M2Hk_S2yvXpsNPfZMBMur",
				sortLink: "M2Hk_S2yvXpsNPfZMBMur",
				active: "_2VxDgoEy96XoqXUPsQooJk",
				selected: "_1s79QnBguPbckxiiPvFXGP",
				SortLabel: "_1lwNBHmCQJObvqs1fXKSYR",
				sortLabel: "_1lwNBHmCQJObvqs1fXKSYR",
				SortOverflowButton: "_2yF1lH154qN6wYff1cVkh6",
				sortOverflowButton: "_2yF1lH154qN6wYff1cVkh6",
				CountrySort: "VatfkH4hd3AcIOCT15Zai",
				countrySort: "VatfkH4hd3AcIOCT15Zai",
				StateSort: "Eh7eF0Eki8fFfZXVYJd1y",
				stateSort: "Eh7eF0Eki8fFfZXVYJd1y",
				TimeSort: "GzkzdrqG-NjAYH7eKJan4",
				timeSort: "GzkzdrqG-NjAYH7eKJan4",
				DropdownSortWrapper: "_2DTQGxtlm0AKr7OUepCaGY",
				dropdownSortWrapper: "_2DTQGxtlm0AKr7OUepCaGY",
				Dropdown: "Sgi9lgQUrox4tW9Q75iif",
				dropdown: "Sgi9lgQUrox4tW9Q75iif",
				DropdownButton: "_3zv8UgDcsOix4lXOk2qE9v",
				dropdownButton: "_3zv8UgDcsOix4lXOk2qE9v",
				DropdownRow: "_3LjUrsRA9MkUFLGB6ZCWaX",
				dropdownRow: "_3LjUrsRA9MkUFLGB6ZCWaX",
				DropdownRowIcon: "_3HQa2czyzeTD5qteZcHyI2",
				dropdownRowIcon: "_3HQa2czyzeTD5qteZcHyI2",
				DropdownRowSelected: "_1yVJwSS9tASrkJ6R6wvXpT",
				dropdownRowSelected: "_1yVJwSS9tASrkJ6R6wvXpT"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "wBtTDilkW_rtT2k5x3eie",
				container: "wBtTDilkW_rtT2k5x3eie",
				LayoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5",
				layoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/listingSort/index.ts"),
				l = n("./src/reddit/actions/preferences.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/helpers/isListingFocused/index.tsx"),
				u = n("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				p = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/reselect/es/index.js")),
				b = n("./src/lib/addQueryParams/index.ts"),
				h = n("./src/lib/constants/index.ts"),
				f = n("./node_modules/react-router-redux/es/index.js"),
				w = n("./src/reddit/actions/tooltip.ts"),
				g = n("./node_modules/fbt/lib/FbtPublic.js"),
				x = n("./src/higherOrderComponents/asTooltip.tsx"),
				_ = n("./src/reddit/constants/listingSorts.ts"),
				k = n("./src/reddit/contexts/Tooltip.ts"),
				v = n("./src/reddit/controls/Dropdown/index.tsx"),
				y = n("./src/reddit/controls/Dropdown/Row.tsx"),
				O = n("./src/reddit/helpers/path/index.ts"),
				C = n("./src/reddit/helpers/trackers/navigation.ts"),
				E = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				S = n("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				j = n("./src/reddit/selectors/experiments/econLeaderboards.ts"),
				P = n("./src/reddit/selectors/tooltip.ts"),
				N = n("./src/reddit/selectors/user.ts"),
				L = n("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				I = n("./src/reddit/components/ListingSort/index.m.less"),
				T = n.n(I),
				R = n("./src/lib/lessComponent.tsx");

			function D() {
				return (D = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const B = "ListingSort--SortPicker",
				U = Object(x.a)(R.a.wrapped(v.a, "Dropdown", T.a)),
				A = R.a.wrapped(L.a, "ListingSortIcon", T.a),
				F = (R.a.wrapped(E.b, "DropdownTriangle", T.a), R.a.div("Title", T.a)),
				M = R.a.wrapped(e => s.a.createElement(y.b, D({}, e, {
					noHover: !0,
					isSelected: !1
				})), "Row", T.a),
				H = ({
					disabled: e,
					...t
				}) => s.a.createElement("div", D({}, t, {
					className: Object(o.a)(T.a.SortWrapper, t.className, {
						[T.a.isDisabled]: e
					})
				})),
				z = R.a.div("DropdownRowDisabled", T.a),
				G = Object(d.t)({
					isFrontpage: d.y,
					isProfilePage: d.G,
					pageLayer: e => e
				}),
				W = Object(p.c)({
					isAwardListingExperimentEnabled: j.a,
					isBestSortPopularEnabled: S.a,
					user: N.j,
					dropdownIsOpen: (e, t) => Object(P.b)(t.dropdownId || B)(e),
					isPopularPage: d.C
				}),
				q = Object(a.b)(W, (e, {
					dropdownId: t,
					pageLayer: n
				}) => ({
					onOpenDropdown: () => e(Object(w.h)({
						tooltipId: t || B
					}))
				}));
			var K = R.a.wrapped(G(q(Object(c.c)(e => s.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, !1 !== e.showTitle && s.a.createElement(F, null, g.fbt._("Sort", null, {
					hk: "2BfINq"
				})), s.a.createElement(H, {
					disabled: e.disabled
				}, e.children || s.a.createElement(M, {
					className: e.buttonClassName,
					displayText: Object(_.a)(e.sort),
					id: e.dropdownId || B,
					showDropdownTriangle: !0
				}, s.a.createElement(A, {
					sort: e.sort
				}))), s.a.createElement(k.a.Consumer, null, t => s.a.createElement(U, D({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: e.dropdownId || B
				}, t, {
					renderContentsHidden: !0
				}), e.disabled ? s.a.createElement(z, null, g.fbt._("Coming soon", null, {
					hk: "taPqm"
				})) : (e.sortOptions || ((e, t, n, r, s) => {
					const a = [h.P.HOT, h.P.NEW, h.P.TOP, h.P.RISING];
					return (e && (n || r) || t && r) && a.unshift(h.P.BEST), t && s && a.splice(3, 0, h.P.AWARDED), a
				})(e.isFrontpage, e.isPopularPage, e.user, e.isBestSortPopularEnabled, e.isAwardListingExperimentEnabled)).map(t => s.a.createElement(y.b, {
					className: Object(o.a)(e.rowClassName, e.sort === t ? e.rowSelectedClassName : void 0),
					displayText: Object(_.a)(t),
					onClick: () => {
						e.onChange(t), e.sendEvent(Object(C.a)(t))
					},
					href: e.isProfilePage ? Object(b.a)(e.baseUrl, {
						sort: t
					}) : Object(O.a)(e.baseUrl, `${t}/`),
					isSelected: e.sort === t,
					key: t
				}, s.a.createElement(A, {
					className: e.rowIconClassName,
					sort: t
				}))))))))), "ListingSort", T.a),
				Y = n("./src/reddit/constants/parameters.ts");
			const Z = e => {
					const t = V[e];
					return t && t() || ""
				},
				V = {
					[h.Rb.AllStates]: () => g.fbt._("All", null, {
						hk: "3mz2P1"
					}),
					[h.Rb.Alaska]: () => g.fbt._("alaska", null, {
						hk: "3PQz70"
					}),
					[h.Rb.Alabama]: () => g.fbt._("alabama", null, {
						hk: "1Ain9C"
					}),
					[h.Rb.Arkansas]: () => g.fbt._("arkansas", null, {
						hk: "3MSLfs"
					}),
					[h.Rb.Arizona]: () => g.fbt._("arizona", null, {
						hk: "PjKyy"
					}),
					[h.Rb.California]: () => g.fbt._("california", null, {
						hk: "4fS2Uy"
					}),
					[h.Rb.Colorado]: () => g.fbt._("colorado", null, {
						hk: "2FU5sm"
					}),
					[h.Rb.Connecticut]: () => g.fbt._("connecticut", null, {
						hk: "3HJ97l"
					}),
					[h.Rb.DistrictOfColumbia]: () => g.fbt._("district of columbia", null, {
						hk: "43sboQ"
					}),
					[h.Rb.Delaware]: () => g.fbt._("delaware", null, {
						hk: "1sMYnC"
					}),
					[h.Rb.Florida]: () => g.fbt._("florida", null, {
						hk: "1ahnDc"
					}),
					[h.Rb.Georgia]: () => g.fbt._("georgia", null, {
						hk: "3O8sgW"
					}),
					[h.Rb.Hawaii]: () => g.fbt._("hawaii", null, {
						hk: "11be3k"
					}),
					[h.Rb.Iowa]: () => g.fbt._("iowa", null, {
						hk: "15vW0A"
					}),
					[h.Rb.Idaho]: () => g.fbt._("idaho", null, {
						hk: "12whY2"
					}),
					[h.Rb.Illinois]: () => g.fbt._("illinois", null, {
						hk: "4F6qqr"
					}),
					[h.Rb.Indiana]: () => g.fbt._("indiana", null, {
						hk: "1Xvs3I"
					}),
					[h.Rb.Kansas]: () => g.fbt._("kansas", null, {
						hk: "4yvtHS"
					}),
					[h.Rb.Kentucky]: () => g.fbt._("kentucky", null, {
						hk: "3iqD7X"
					}),
					[h.Rb.Louisiana]: () => g.fbt._("louisiana", null, {
						hk: "1pM17K"
					}),
					[h.Rb.Massachusetts]: () => g.fbt._("massachusetts", null, {
						hk: "3Hx5EP"
					}),
					[h.Rb.Maryland]: () => g.fbt._("maryland", null, {
						hk: "62JHL"
					}),
					[h.Rb.Maine]: () => g.fbt._("maine", null, {
						hk: "2Sh6yp"
					}),
					[h.Rb.Michigan]: () => g.fbt._("michigan", null, {
						hk: "2fnY28"
					}),
					[h.Rb.Minnesota]: () => g.fbt._("minnesota", null, {
						hk: "4diMsG"
					}),
					[h.Rb.Missouri]: () => g.fbt._("missouri", null, {
						hk: "3QuF4u"
					}),
					[h.Rb.Mississippi]: () => g.fbt._("mississippi", null, {
						hk: "28v1kQ"
					}),
					[h.Rb.Montana]: () => g.fbt._("montana", null, {
						hk: "20sZYn"
					}),
					[h.Rb.NorthCarolina]: () => g.fbt._("north carolina", null, {
						hk: "BUaf7"
					}),
					[h.Rb.NorthDakota]: () => g.fbt._("north dakota", null, {
						hk: "1WRpz0"
					}),
					[h.Rb.Nebraska]: () => g.fbt._("nebraska", null, {
						hk: "XUJCr"
					}),
					[h.Rb.NewHampshire]: () => g.fbt._("new hampshire", null, {
						hk: "ga6kK"
					}),
					[h.Rb.NewJersey]: () => g.fbt._("new jersey", null, {
						hk: "3Sz9QN"
					}),
					[h.Rb.NewMexico]: () => g.fbt._("new mexico", null, {
						hk: "i2870"
					}),
					[h.Rb.Nevada]: () => g.fbt._("nevada", null, {
						hk: "2DsBxU"
					}),
					[h.Rb.NewYork]: () => g.fbt._("new york", null, {
						hk: "2wKULo"
					}),
					[h.Rb.Ohio]: () => g.fbt._("ohio", null, {
						hk: "1KDnKA"
					}),
					[h.Rb.Oklahoma]: () => g.fbt._("oklahoma", null, {
						hk: "2P0Ita"
					}),
					[h.Rb.Oregon]: () => g.fbt._("oregon", null, {
						hk: "3CqdY4"
					}),
					[h.Rb.Pennsylvania]: () => g.fbt._("pennsylvania", null, {
						hk: "2skMK"
					}),
					[h.Rb.RhodeIsland]: () => g.fbt._("rhode island", null, {
						hk: "120MAU"
					}),
					[h.Rb.SouthCarolina]: () => g.fbt._("south carolina", null, {
						hk: "3JyeG9"
					}),
					[h.Rb.SouthDakota]: () => g.fbt._("south dakota", null, {
						hk: "4to42L"
					}),
					[h.Rb.Tennessee]: () => g.fbt._("tennessee", null, {
						hk: "gHo1c"
					}),
					[h.Rb.Texas]: () => g.fbt._("texas", null, {
						hk: "3dgz4M"
					}),
					[h.Rb.Utah]: () => g.fbt._("utah", null, {
						hk: "22zf2i"
					}),
					[h.Rb.Virginia]: () => g.fbt._("virginia", null, {
						hk: "1dvXBl"
					}),
					[h.Rb.Vermont]: () => g.fbt._("vermont", null, {
						hk: "1Cdmbu"
					}),
					[h.Rb.Washington]: () => g.fbt._("washington", null, {
						hk: "hhztG"
					}),
					[h.Rb.Wisconsin]: () => g.fbt._("wisconsin", null, {
						hk: "3SOyMZ"
					}),
					[h.Rb.WestVirginia]: () => g.fbt._("west virginia", null, {
						hk: "1jIKYD"
					}),
					[h.Rb.Wyoming]: () => g.fbt._("wyoming", null, {
						hk: "1QaJzt"
					})
				};
			var J = n("./src/reddit/components/StateSort/index.m.less"),
				X = n.n(J);

			function Q() {
				return (Q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const $ = R.a.wrapped(v.a, "_Dropdown", X.a),
				ee = Object(x.a)($),
				te = e => {
					return e.indexOf("_") > 0 && re(e) === h.w.UnitedStates
				},
				ne = e => {
					if (te(e)) {
						return e.split("_")[1]
					}
					return h.Rb.AllStates
				},
				re = e => {
					if (e && e.indexOf("_") > 0) {
						return e.split("_")[0]
					}
					return e
				},
				se = e => {
					const t = re(e),
						n = ne(e);
					return te(e) ? `${t}_${n}` : t
				},
				ae = Object(d.t)(),
				oe = Object(p.c)({
					dropdownIsOpen: Object(P.b)("StateSort--StateSortPicker")
				}),
				ie = Object(a.b)(oe, e => ({
					onOpenDropdown: () => e(Object(w.h)({
						tooltipId: "StateSort--StateSortPicker"
					})),
					onClickLink: (t, n) => {
						e(Object(f.b)(t)), e(Object(l.u)(h.w.UnitedStates + "_" + n))
					}
				}));
			var le = R.a.wrapped(ae(ie(e => {
				const t = `${e.baseUrl}?${Y.h}=${h.w.UnitedStates}`;
				return s.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, s.a.createElement(H, {
					className: e.wrapperClassName,
					disabled: e.disabled
				}, s.a.createElement(M, {
					className: e.buttonClassName,
					displayText: e.showStateAbbreviations && e.sort ? e.sort : Z(e.sort),
					id: "StateSort--StateSortPicker",
					showDropdownTriangle: !0
				})), s.a.createElement(k.a.Consumer, null, n => s.a.createElement(ee, Q({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "StateSort--StateSortPicker"
				}, n, {
					renderContentsHidden: !0
				}), Object.keys(h.Rb).map(n => {
					const r = h.Rb[n];
					return s.a.createElement("div", {
						onClick: () => e.onClickLink((e => e === h.Rb.AllStates ? t : `${t}_${e}`)(r), se(r))
					}, s.a.createElement(y.b, {
						className: Object(o.a)(e.rowClassName, e.sort === r ? e.rowSelectedClassName : void 0),
						displayText: Z(r),
						isSelected: e.sort === r
					}))
				}))))
			})), "Component", X.a);
			const ce = {
				[h.w.Everywhere]: () => g.fbt._("Everywhere", null, {
					hk: "3ysAHX"
				}),
				[h.w.UnitedStates]: () => g.fbt._("United States", null, {
					hk: "qrsat"
				}),
				[h.w.Argentina]: () => g.fbt._("Argentina", null, {
					hk: "1tWd87"
				}),
				[h.w.Australia]: () => g.fbt._("Australia", null, {
					hk: "2c0yTh"
				}),
				[h.w.Bulgaria]: () => g.fbt._("Bulgaria", null, {
					hk: "2mbkzD"
				}),
				[h.w.Canada]: () => g.fbt._("Canada", null, {
					hk: "1bnYIf"
				}),
				[h.w.Chile]: () => g.fbt._("Chile", null, {
					hk: "2eNYaZ"
				}),
				[h.w.Colombia]: () => g.fbt._("Colombia", null, {
					hk: "2sw6kC"
				}),
				[h.w.Croatia]: () => g.fbt._("Croatia", null, {
					hk: "4vRKYu"
				}),
				[h.w.CzechRepublic]: () => g.fbt._("Czech Republic", null, {
					hk: "21xzwE"
				}),
				[h.w.Finland]: () => g.fbt._("Finland", null, {
					hk: "jmDeD"
				}),
				[h.w.France]: () => g.fbt._("France", null, {
					hk: "1fX2Y8"
				}),
				[h.w.Germany]: () => g.fbt._("Germany", null, {
					hk: "2mADuB"
				}),
				[h.w.Greece]: () => g.fbt._("Greece", null, {
					hk: "UUFTD"
				}),
				[h.w.Hungary]: () => g.fbt._("Hungary", null, {
					hk: "4tz4jk"
				}),
				[h.w.Iceland]: () => g.fbt._("Iceland", null, {
					hk: "4mwr9S"
				}),
				[h.w.India]: () => g.fbt._("India", null, {
					hk: "omZ5C"
				}),
				[h.w.Ireland]: () => g.fbt._("Ireland", null, {
					hk: "3rG4DM"
				}),
				[h.w.Italy]: () => g.fbt._("Italy", null, {
					hk: "3EvGjk"
				}),
				[h.w.Japan]: () => g.fbt._("Japan", null, {
					hk: "3EAE8v"
				}),
				[h.w.Malaysia]: () => g.fbt._("Malaysia", null, {
					hk: "MgsVM"
				}),
				[h.w.Mexico]: () => g.fbt._("Mexico", null, {
					hk: "4ibMpW"
				}),
				[h.w.NewZealand]: () => g.fbt._("New Zealand", null, {
					hk: "3LwpKe"
				}),
				[h.w.Philippines]: () => g.fbt._("Philippines", null, {
					hk: "jokzr"
				}),
				[h.w.Poland]: () => g.fbt._("Poland", null, {
					hk: "2v19X3"
				}),
				[h.w.Portugal]: () => g.fbt._("Portugal", null, {
					hk: "2HNYp5"
				}),
				[h.w.PuertoRico]: () => g.fbt._("Puerto Rico", null, {
					hk: "22QgWG"
				}),
				[h.w.Romania]: () => g.fbt._("Romania", null, {
					hk: "5HuLT"
				}),
				[h.w.Serbia]: () => g.fbt._("Serbia", null, {
					hk: "3ly2Z0"
				}),
				[h.w.Singapore]: () => g.fbt._("Singapore", null, {
					hk: "3qEBqp"
				}),
				[h.w.Spain]: () => g.fbt._("Spain", null, {
					hk: "44RpFE"
				}),
				[h.w.Sweden]: () => g.fbt._("Sweden", null, {
					hk: "A5nWO"
				}),
				[h.w.Taiwan]: () => g.fbt._("Taiwan", null, {
					hk: "IHujb"
				}),
				[h.w.Thailand]: () => g.fbt._("Thailand", null, {
					hk: "1c8zJr"
				}),
				[h.w.Turkey]: () => g.fbt._("Turkey", null, {
					hk: "11Xk7x"
				}),
				[h.w.UnitedKingdom]: () => g.fbt._("United Kingdom", null, {
					hk: "rs1fl"
				})
			};
			var de = n("./src/reddit/components/CountrySort/index.m.less"),
				me = n.n(de);

			function ue() {
				return (ue = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const pe = "CountrySort--CountrySortPicker",
				be = Object(d.t)(),
				he = Object(p.c)({
					dropdownIsOpen: Object(P.b)(pe)
				});
			var fe = be(Object(a.b)(he, e => ({
					onCloseDropdown: t => e(Object(w.j)({
						tooltipId: t
					})),
					onOpenDropdown: t => e(Object(w.g)({
						tooltipId: t
					})),
					onClickLink: (t, n) => {
						e(Object(f.b)(t)), e(Object(l.u)(n))
					}
				}))(e => {
					const t = re(e.sort),
						n = ne(e.sort),
						r = `${e.baseUrl}?${Y.h}=`;
					return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
						className: Object(o.a)(me.a.countrySort, e.className),
						onClick: () => e.dropdownIsOpen ? e.onCloseDropdown(pe) : e.onOpenDropdown(pe)
					}, s.a.createElement(H, {
						className: e.wrapperClassName,
						disabled: e.disabled
					}, s.a.createElement(M, {
						className: e.buttonClassName,
						displayText: (() => t in ce ? ce[t]() : ce[h.w.Everywhere]())(),
						id: pe,
						showDropdownTriangle: !0
					})), s.a.createElement(k.a.Consumer, null, n => s.a.createElement(ee, ue({
						className: e.dropdownClassName,
						isOpen: e.dropdownIsOpen,
						tooltipId: pe
					}, n, {
						renderContentsHidden: !0
					}), Object.keys(h.w).map(n => {
						const a = h.w[n];
						return s.a.createElement("div", {
							key: a,
							onClick: () => e.onClickLink(`${r}${se(a)}`, a)
						}, s.a.createElement(y.b, {
							className: Object(o.a)(e.rowClassName, t === a ? e.rowSelectedClassName : void 0),
							displayText: ce[a](),
							isSelected: t === a
						}))
					})))), t === h.w.UnitedStates && s.a.createElement(le, {
						baseUrl: e.baseUrl,
						buttonClassName: e.buttonClassName,
						className: e.stateSortClassName,
						disabled: e.disabled,
						dropdownClassName: e.dropdownClassName,
						rowClassName: e.rowClassName,
						rowSelectedClassName: e.rowSelectedClassName,
						showStateAbbreviations: e.showStateAbbreviations,
						sort: n,
						wrapperClassName: e.wrapperClassName
					}))
				})),
				we = n("./node_modules/path-browserify/index.js"),
				ge = n.n(we),
				xe = n("./src/reddit/components/TimeSort/index.m.less"),
				_e = n.n(xe);

			function ke() {
				return (ke = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const ve = Object(x.a)(v.a),
				ye = (e, t, n) => {
					let r = e.url;
					return e.urlParams.sort || Object(d.G)(e) || (r = ge.a.join(r, t)), Object(b.a)(r, {
						[Y.x]: n
					})
				},
				Oe = R.a.div("ListingSortContainer", _e.a),
				Ce = Object(d.t)(),
				Ee = Object(p.c)({
					dropdownIsOpen: Object(P.b)("TimeSort--SortPicker")
				});
			var Se = Ce(Object(a.b)(Ee, e => ({
					onOpenDropdown: () => e(Object(w.h)({
						tooltipId: "TimeSort--SortPicker"
					}))
				}))(Object(c.c)(e => s.a.createElement(Oe, {
					className: e.className,
					onClick: e.onOpenDropdown
				}, s.a.createElement(H, {
					className: e.wrapperClassName,
					disabled: !1
				}, s.a.createElement(M, {
					className: e.buttonClassName,
					displayText: Object(_.b)(e.timeSort),
					id: "TimeSort--SortPicker",
					showDropdownTriangle: !0
				})), s.a.createElement(k.a.Consumer, null, t => s.a.createElement(ve, ke({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "TimeSort--SortPicker"
				}, t), [h.Ub.HOUR, h.Ub.DAY, h.Ub.WEEK, h.Ub.MONTH, h.Ub.YEAR, h.Ub.ALL].map(t => s.a.createElement(y.b, {
					className: Object(o.a)(e.rowClassName, e.timeSort === t ? e.rowSelectedClassName : void 0),
					displayText: Object(_.b)(t),
					href: ye(e.pageLayer, e.listingSort, t),
					isSelected: e.timeSort === t,
					onClick: () => {
						e.onChange(t), e.sendEvent(Object(C.c)(t))
					}
				})))))))),
				je = n("./src/reddit/constants/listings.ts"),
				Pe = n("./src/reddit/contexts/CoreStyleExperiments.ts"),
				Ne = n("./src/reddit/controls/Button/index.tsx"),
				Le = n("./src/reddit/icons/fonts/index.tsx"),
				Ie = n("./src/reddit/icons/fonts/Menu/index.tsx"),
				Te = n("./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less"),
				Re = n.n(Te);

			function De() {
				return (De = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const Be = new Set([h.P.CONTROVERSIAL, h.P.TOP]),
				Ue = new Set([h.P.CONTROVERSIAL, h.P.RISING]),
				Ae = "ListingSort--Overflow",
				Fe = Object(d.t)({
					isFrontpage: d.y,
					isProfilePage: d.G,
					pageLayer: e => e
				}),
				Me = Object(p.a)((e, t) => t.sortOptions, (e, t) => t.isFrontpage, S.a, N.j, d.C, j.a, (e, t, n, r, s, a) => {
					if (e) return {
						isPopularPage: s,
						sortOptions: e
					};
					const o = [h.P.HOT, h.P.NEW, h.P.TOP, h.P.RISING];
					return (t && (r || n) || s && n) && o.unshift(h.P.BEST), s && a && o.splice(3, 0, h.P.AWARDED), {
						isPopularPage: s,
						sortOptions: o
					}
				});
			class He extends s.a.Component {
				constructor() {
					super(...arguments), this.changeSort = e => {
						this.props.onChange(e), this.props.sendEvent(Object(C.a)(e))
					}, this.getSortUrl = e => {
						const {
							baseUrl: t,
							isProfilePage: n
						} = this.props;
						return n ? Object(b.a)(t, {
							sort: e
						}) : Object(O.a)(t, `${e}/`)
					}, this.renderSortButton = e => {
						const {
							sort: t
						} = this.props;
						return s.a.createElement(Ne.q, {
							className: Object(o.a)(Re.a.SortLink, e === t && Re.a.selected),
							kind: Ne.a.InternalLink,
							priority: Ne.b.Plain,
							Icon: n => s.a.createElement(A, De({}, n, {
								sort: e,
								isFilled: e === t
							})),
							text: Object(_.a)(e),
							onClick: () => this.changeSort(e),
							to: this.getSortUrl(e),
							key: e
						})
					}, this.renderSort = e => {
						const {
							disabled: t,
							geopopularSort: n,
							isPopularPage: r,
							sort: a
						} = this.props, o = r && !!n && e === h.P.HOT && a === h.P.HOT;
						return s.a.createElement(s.a.Fragment, {
							key: e
						}, this.renderSortButton(e), o && s.a.createElement(fe, {
							baseUrl: je.c[je.b.Popular],
							buttonClassName: Re.a.DropdownButton,
							className: Re.a.CountrySort,
							disabled: t,
							dropdownClassName: Re.a.Dropdown,
							rowClassName: Re.a.DropdownRow,
							rowSelectedClassName: Re.a.DropdownRowSelected,
							wrapperClassName: Re.a.DropdownSortWrapper,
							showStateAbbreviations: !0,
							sort: n,
							stateSortClassName: Re.a.StateSort
						}))
					}
				}
				render() {
					const {
						className: e,
						disabled: t,
						onTimeSortChange: n,
						sort: r,
						sortOptions: a,
						timeSort: i
					} = this.props, l = !t && Be.has(r), c = Ue.has(r), d = a.filter(e => !Ue.has(e)), m = a.filter(e => Ue.has(e) && e !== r);
					return s.a.createElement(Pe.b.Consumer, null, ({
						icons2020: t
					}) => s.a.createElement(s.a.Fragment, null, s.a.createElement(K, De({}, this.props, {
						buttonClassName: Re.a.DropdownButton,
						className: Object(o.a)(Re.a.SortDropdown, e),
						rowClassName: Re.a.DropdownRow,
						rowIconClassName: Re.a.DropdownRowIcon,
						rowSelectedClassName: Re.a.DropdownRowSelected,
						showTitle: !1
					})), s.a.createElement("div", {
						className: Object(o.a)(Re.a.SortButtons, e)
					}, d.map(this.renderSort)), c && this.renderSort(r), l && s.a.createElement(Se, {
						baseUrl: this.getSortUrl(r),
						buttonClassName: Re.a.DropdownButton,
						className: Re.a.TimeSort,
						dropdownClassName: Re.a.Dropdown,
						listingSort: r,
						onChange: n,
						rowClassName: Re.a.DropdownRow,
						rowSelectedClassName: Re.a.DropdownRowSelected,
						timeSort: i || h.Vb,
						wrapperClassName: Re.a.DropdownSortWrapper
					}), m.length > 0 && s.a.createElement(K, De({}, this.props, {
						className: Object(o.a)(Re.a.SortOverflow, e),
						dropdownClassName: Re.a.Dropdown,
						dropdownId: Ae,
						rowClassName: Re.a.DropdownRow,
						rowIconClassName: Re.a.DropdownRowIcon,
						rowSelectedClassName: Re.a.DropdownRowSelected,
						showTitle: !1,
						sortOptions: m
					}), s.a.createElement("button", {
						className: Re.a.SortOverflowButton,
						id: Ae
					}, t ? s.a.createElement(Le.a, {
						name: "overflow_horizontal"
					}) : s.a.createElement(Ie.a, null)))))
				}
			}
			var ze = Fe(Object(a.b)(Me)(Object(c.c)(He))),
				Ge = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less"),
				We = n.n(Ge);
			const qe = Object(d.t)({
					isProfilePage: d.G,
					pageLayer: e => e
				}),
				Ke = Object(a.b)(null, (e, {
					subredditId: t
				}) => ({
					updateSortPreference: (n, r) => {
						if (t) {
							const s = Object(i.c)({
								sort: n,
								timeSort: r
							});
							e(Object(l.I)(t, s))
						}
					}
				}));
			class Ye extends s.a.Component {
				constructor() {
					super(...arguments), this.blurListingBroadcast = () => {
						m.a.setState({
							isListingFocused: !1
						})
					}, this.focusListingBroadcast = () => {
						m.a.setState({
							isListingFocused: !0
						})
					}, this.updateTimeSort = e => {
						this.props.updateSortPreference(this.props.sort, e)
					}
				}
				render() {
					const {
						baseUrl: e,
						className: t,
						countrySort: n,
						disabled: r = !1,
						isProfilePage: a,
						sort: i,
						sortOptions: l,
						subredditId: c,
						timeSort: d,
						updateSortPreference: m
					} = this.props;
					return s.a.createElement("div", {
						className: Object(o.a)(We.a.Container, t),
						onBlur: this.blurListingBroadcast,
						onFocus: this.focusListingBroadcast
					}, s.a.createElement(ze, {
						baseUrl: e,
						disabled: r,
						geopopularSort: n,
						onChange: m,
						onTimeSortChange: this.updateTimeSort,
						sort: i,
						sortOptions: l,
						timeSort: d
					}), !a && s.a.createElement(u.a, {
						className: We.a.LayoutSwitch,
						subredditId: c
					}))
				}
			}
			t.a = qe(Ke(Object(c.c)(Ye)))
		},
		"./src/reddit/components/ListingSort/ListingSortIcon.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return _
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/constants/index.ts"),
				i = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				l = n("./src/reddit/icons/fonts/index.tsx"),
				c = n("./src/reddit/icons/fonts/Gift/index.tsx"),
				d = n("./src/reddit/icons/svgs/Best/index.tsx"),
				m = n("./src/reddit/icons/svgs/Controversial/index.tsx"),
				u = n("./src/reddit/icons/svgs/Hot/index.tsx"),
				p = n("./src/reddit/icons/svgs/New/index.tsx"),
				b = n("./src/reddit/icons/svgs/Rising/index.tsx"),
				h = n("./src/reddit/icons/svgs/Top/index.tsx"),
				f = n("./src/reddit/controls/Dropdown/index.m.less"),
				w = n.n(f);
			const g = {
					[o.P.BEST]: d.a,
					[o.P.HOT]: u.a,
					[o.P.NEW]: p.a,
					[o.P.CONTROVERSIAL]: m.a,
					[o.P.TOP]: h.a,
					[o.P.RISING]: b.a,
					[o.P.AWARDED]: c.a
				},
				x = {
					[o.P.BEST]: "best",
					[o.P.HOT]: "hot",
					[o.P.NEW]: "new",
					[o.P.CONTROVERSIAL]: "controversial",
					[o.P.TOP]: "top",
					[o.P.RISING]: "rising",
					[o.P.AWARDED]: "award"
				};

			function _({
				className: e,
				isFilled: t,
				sort: n
			}) {
				if (Object(i.a)() && void 0 !== x[n]) return s.a.createElement(l.a, {
					name: x[n],
					isFilled: t,
					className: Object(a.a)(e, w.a.iconStyles)
				});
				const r = g[n];
				return r ? s.a.createElement(r, {
					className: Object(a.a)(e, w.a.iconStyles)
				}) : null
			}
		},
		"./src/reddit/components/ListingSort/index.m.less": function(e, t, n) {
			e.exports = {
				Dropdown: "_3RzIwmCawx9KWuyuEKa-3s",
				dropdown: "_3RzIwmCawx9KWuyuEKa-3s",
				DropdownTriangle: "_3zQzIg3Hu-gfh_XW8Eh7N3",
				dropdownTriangle: "_3zQzIg3Hu-gfh_XW8Eh7N3",
				Title: "_3ZXcN-Nu8QmOxd_hGrsjKD",
				title: "_3ZXcN-Nu8QmOxd_hGrsjKD",
				Row: "_1gYorLdXyKMUS-i9loCkHd",
				row: "_1gYorLdXyKMUS-i9loCkHd",
				SortWrapper: "_3-LItr7eURRBwGwCaMD0eB",
				sortWrapper: "_3-LItr7eURRBwGwCaMD0eB",
				isDisabled: "_1BlN3qzijbBTtkKxs6CX-N",
				DropdownRowDisabled: "_3BSqU_xxc6w7390EfssLhp",
				dropdownRowDisabled: "_3BSqU_xxc6w7390EfssLhp",
				ListingSort: "_1oAH8WzvQU6SeYEsM1msMu",
				listingSort: "_1oAH8WzvQU6SeYEsM1msMu"
			}
		},
		"./src/reddit/components/OverviewConversationsPost/Border/index.m.less": function(e, t, n) {
			e.exports = {
				border: "_1lhlKOukuHHzZKIlnXcHmQ",
				isFirst: "_2o6nV_ET0Jis6_EzEHx9K3",
				isLast: "_1C2mkyHj-MAuIndy8vJIU5"
			}
		},
		"./src/reddit/components/OverviewConversationsPost/Border/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/OverviewConversationsPost/Border/index.m.less"),
				i = n.n(o);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = ({
				isFirst: e,
				isLast: t,
				...n
			}) => s.a.createElement("div", l({
				className: Object(a.a)(i.a.border, {
					[i.a.isFirst]: e,
					[i.a.isLast]: t
				})
			}, n))
		},
		"./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.m.less": function(e, t, n) {
			e.exports = {
				ProfileOwnerCommentWrapper: "_3CecFEZvC8MFSvLsfuVYUs",
				profileOwnerCommentWrapper: "_3CecFEZvC8MFSvLsfuVYUs",
				CommentContentWrapper: "hpOP1hjcTLrw1L2rfRtMP",
				commentContentWrapper: "hpOP1hjcTLrw1L2rfRtMP",
				Wrapper: "_2OpuabFjFVU3UZ4jcP58gJ",
				wrapper: "_2OpuabFjFVU3UZ4jcP58gJ",
				isFirst: "_3bYCCkSa6xxUYDEPgIa7w5",
				isLast: "_3TNQpNlZH2M4X50sedpaIG",
				isAwarded: "_2UgLKr67bDuCg6zs7UOCoN",
				isNightmodeOn: "_3ZqQTMfjWU3NV-dAfa8O9E",
				CommentSeparator: "_1mvcEtI04YyIVKsT-vUkiN",
				commentSeparator: "_1mvcEtI04YyIVKsT-vUkiN"
			}
		},
		"./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/lodash/times.js"),
				s = n.n(r),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				i = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/constants/gold.ts"),
				d = n("./src/lib/classNames/index.ts"),
				m = n("./src/lib/lessComponent.tsx"),
				u = n("./src/reddit/components/CommentContainer/index.tsx"),
				p = n("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				b = n("./src/reddit/actions/post.ts"),
				h = n("./src/reddit/helpers/getClickInfo.ts"),
				f = n("./src/reddit/selectors/commentSelector.ts"),
				w = n("./src/reddit/selectors/communityAwards.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				x = n("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.m.less"),
				_ = n.n(x);
			const k = m.a.div("ProfileOwnerCommentWrapper", _.a),
				v = m.a.div("CommentContentWrapper", _.a),
				y = m.a.div("Wrapper", _.a),
				O = m.a.div("CommentSeparator", _.a),
				C = Object(i.b)(() => Object(l.c)({
					comment: (e, t) => Object(f.a)(e, t),
					isAwarded: (e, t) => {
						const n = Object(f.a)(e, t);
						return !(!n || !n.awardCountsById) && Object.keys(n.awardCountsById).some(t => {
							const n = Object(w.a)(e, t);
							return n && n.coinPrice >= c.g
						})
					},
					isNightmodeOn: g.V
				}), e => ({
					openPost: t => e(Object(b.E)(t))
				}));
			class E extends o.a.Component {
				render() {
					const {
						comment: e,
						commentId: t,
						depth: n,
						openPost: r,
						isAwarded: a,
						isFirst: i,
						isLast: l,
						isNightmodeOn: c,
						profileName: m,
						showModTools: p
					} = this.props, b = m === e.author ? S : j;
					return o.a.createElement(u.a, {
						comment: e,
						onClick: (e, t) => {
							r({
								postOrComment: t,
								clickInfo: Object(h.a)(e),
								queryParams: {
									context: 3
								}
							}), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
						}
					}, o.a.createElement(y, {
						className: Object(d.a)({
							[_.a.isFirst]: i,
							[_.a.isLast]: l,
							[_.a.isAwarded]: a,
							[_.a.isNightmodeOn]: c
						})
					}, s()(n + 1, e => o.a.createElement(O, {
						key: e
					})), o.a.createElement(v, null, b(t, m, p))))
				}
			}
			const S = (e, t, n) => o.a.createElement(k, null, j(e, t, n, !0, !0)),
				j = (e, t, n, r = !1, s) => o.a.createElement(p.a, {
					commentId: e,
					commentsPageKey: "profileOverviewPageKey",
					showFlatlist: r,
					showModTools: n,
					isExpanded: !!s
				});
			t.a = C(E)
		},
		"./src/reddit/components/ProfileCommentList/ListItem.m.less": function(e, t, n) {
			e.exports = {
				ClassicPost: "_3HddQjb-wsXsww_pAIh20y",
				classicPost: "_3HddQjb-wsXsww_pAIh20y",
				OverviewCommentPost: "_1e72wv5XA_Ww9f_Jld1feN",
				overviewCommentPost: "_1e72wv5XA_Ww9f_Jld1feN",
				backgroundMargin: "_2QIF_lwHCJCj3Dltr80ZqZ",
				isFirstInCommentList: "_2qBXIj3HBiFJkTkjCTD627",
				isLastInCommentList: "pd606OJnAc8wAE-N-Zm84"
			}
		},
		"./src/reddit/components/StateSort/index.m.less": function(e, t, n) {
			e.exports = {
				_Dropdown: "KZGTzwiGn_74p_B8yZaKw",
				dropdown: "KZGTzwiGn_74p_B8yZaKw",
				Component: "_3-D0oENu00AlV9AmpZqxfm",
				component: "_3-D0oENu00AlV9AmpZqxfm"
			}
		},
		"./src/reddit/components/TimeSort/index.m.less": function(e, t, n) {
			e.exports = {
				ListingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey",
				listingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey"
			}
		},
		"./src/reddit/components/TitleTagManager/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./node_modules/react-helmet/es/Helmet.js"),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/pageTitle.ts"),
				c = n("./src/reddit/helpers/tabBadging/index.ts"),
				d = n("./src/reddit/selectors/appBadges.ts");
			const m = Object(i.a)(d.c, e => ({
				badgeCount: e
			}));
			class u extends r.Component {
				constructor() {
					super(...arguments), this.title = Object(l.c)().toString(), this.state = {
						badgeCount: 0
					}
				}
				getTitle() {
					const e = this.props.title.length > 0 ? this.props.title : Object(l.c)().toString(),
						t = this.props.badgeCount >= 100 ? "99+" : this.props.badgeCount;
					return this.props.badgeCount > 0 ? `(${t}) ${this.props.title}` : e
				}
				render() {
					return Object(c.b)(this.props.badgeCount > 0), s.a.createElement(a.a, {
						title: this.getTitle()
					})
				}
			}
			t.a = Object(o.b)(m)(u)
		},
		"./src/reddit/constants/listingSorts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return l
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts");
			const a = {
					[s.P.BEST]: () => r.fbt._("Best", null, {
						hk: "dpKzI"
					}),
					[s.P.HOT]: () => r.fbt._("Hot", null, {
						hk: "Et75P"
					}),
					[s.P.NEW]: () => r.fbt._("New", null, {
						hk: "CDmNl"
					}),
					[s.P.CONTROVERSIAL]: () => r.fbt._("Controversial", null, {
						hk: "4dqPOJ"
					}),
					[s.P.RISING]: () => r.fbt._("Rising", null, {
						hk: "4gCzg6"
					}),
					[s.P.TOP]: () => r.fbt._("Top", null, {
						hk: "40Uy9p"
					}),
					[s.P.AWARDED]: () => r.fbt._("Awarded", null, {
						hk: "1B7nSa"
					})
				},
				o = e => {
					const t = a[e];
					return t && t() || ""
				},
				i = {
					[s.Ub.HOUR]: () => r.fbt._("Now", null, {
						hk: "ZmhY"
					}),
					[s.Ub.DAY]: () => r.fbt._("Today", null, {
						hk: "40Ugu1"
					}),
					[s.Ub.WEEK]: () => r.fbt._("This Week", null, {
						hk: "14tmoK"
					}),
					[s.Ub.MONTH]: () => r.fbt._("This Month", null, {
						hk: "34dbM3"
					}),
					[s.Ub.YEAR]: () => r.fbt._("This Year", null, {
						hk: "14RJsa"
					}),
					[s.Ub.ALL]: () => r.fbt._("All Time", null, {
						hk: "3qt6Ct"
					})
				},
				l = e => {
					const t = i[e];
					return t && t() || ""
				}
		},
		"./src/reddit/contexts/Tooltip.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = s.a.createContext({})
		},
		"./src/reddit/icons/svgs/Best/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M18.06,3a1,1,0,0,0-1-1A11.16,11.16,0,0,0,9.11,5.29L6.72,7.68A4.45,4.45,0,0,0,4.33,7,4.5,4.5,0,0,0,1.15,8.3a.5.5,0,0,0,0,.71L4,11.84l4.25,4.24,2.83,2.83h0a.48.48,0,0,0,.7,0,4.49,4.49,0,0,0,.62-5.57L14.76,11A11.15,11.15,0,0,0,18.06,3ZM13.47,9.41a2,2,0,0,1-2.88-2.77l.05,0a2,2,0,0,1,2.83,2.82Z"
			}), s.a.createElement("path", {
				d: "M3.21,14.73h0A3.89,3.89,0,0,0,2.06,17.5a.5.5,0,0,0,.5.5,4,4,0,0,0,2.83-1.21,1.5,1.5,0,1,0-2.18-2.06Z"
			}))
		},
		"./src/reddit/icons/svgs/ClassicPosts/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", a({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), s.a.createElement("path", {
				d: "M1.75,6.6V1.75h16.5V6.6Zm0,5.83V7.57h16.5v4.86Zm0,5.82V13.4h16.5v4.85Z"
			}))
		},
		"./src/reddit/icons/svgs/CompactPosts/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", a({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), s.a.createElement("path", {
				d: "M1.75,5V1.75h16.5V5Zm0,4.43V6.18h16.5v3.2Zm0,8.87v-3.2h16.5v3.2Zm0-4.43v-3.2h16.5v3.2Z"
			}))
		},
		"./src/reddit/icons/svgs/Controversial/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("polygon", {
				fill: "inherit",
				points: "16 0 7.25 0 3.5 10.108 8.5 10.108 4.475 20 16 8 11 8"
			})))
		},
		"./src/reddit/icons/svgs/Hot/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("title", null, "Hot"), s.a.createElement("path", {
				d: "M10.31.61a.5.5,0,0,0-.61,0C9.41.83,2.75,6.07,2.75,11.47a8.77,8.77,0,0,0,3.14,6.91.5.5,0,0,0,.75-.64,3.84,3.84,0,0,1-.55-2A7.2,7.2,0,0,1,10,9.56a7.2,7.2,0,0,1,3.91,6.23,3.84,3.84,0,0,1-.55,2,.5.5,0,0,0,.75.64,8.77,8.77,0,0,0,3.14-6.91C17.25,6.07,10.59.83,10.31.61Z"
			}))
		},
		"./src/reddit/icons/svgs/LargePosts/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", a({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), s.a.createElement("path", {
				d: "M1.75,9.38V1.75h16.5V9.38Zm0,8.87V10.62h16.5v7.63Z"
			}))
		},
		"./src/reddit/icons/svgs/New/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("polygon", {
				fill: "inherit",
				points: "17.16 10 19.07 12.936 15.799 14.188 15.619 17.686 12.237 16.776 10.035 19.5 7.833 16.776 4.451 17.686 4.271 14.188 1 12.936 2.91 10 1 7.065 4.271 5.812 4.451 2.315 7.833 3.224 10.035 .5 12.237 3.224 15.619 2.315 15.799 5.812 19.07 7.065"
			})))
		},
		"./src/reddit/icons/svgs/Rising/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M18.5 4h-6a.5.5 0 0 0-.35.85l1.64 1.65-3.29 3.29L8.21 7.5a1 1 0 0 0-1.41 0L.65 13.65a.5.5 0 0 0 0 .71l2 2a.5.5 0 0 0 .71 0l4.14-4.15 2.29 2.29a1 1 0 0 0 1.41 0l5.3-5.29 1.65 1.65a.5.5 0 0 0 .85-.36v-6a.5.5 0 0 0-.5-.5z"
			})))
		},
		"./src/reddit/icons/svgs/Top/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M1.25,17.5 L1.25,7.5 L6.25,7.5 L6.25,17.5 L1.25,17.5 Z M12.49995,17.5001 L7.49995,17.5001 L7.49995,5.0001 L4.99995,5.0001 L9.99995,0.0006 L14.99995,5.0001 L12.49995,5.0001 L12.49995,17.5001 Z M13.75,17.5 L13.75,12.5 L18.75,12.5 L18.75,17.5 L13.75,17.5 Z"
			})))
		},
		"./src/reddit/pages/ErrorPages/index.m.less": function(e, t, n) {
			e.exports = {
				primaryRouterLink: "WPSTJCepGLEWZl2fETrUM",
				container: "_3pfk0xbr5atzL7KT8pXEZG",
				title: "_3uo9iClHghoc_hoxzdgipi"
			}
		},
		"./src/reddit/pages/ErrorPages/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/pages/ErrorPages/index.m.less"),
				l = n.n(i);
			const c = ({
					message: e
				}) => a.a.createElement("div", {
					className: l.a.container
				}, a.a.createElement("h3", {
					className: l.a.title
				}, e || r.fbt._("Sorry, there doesn't seem to be anything here.", null, {
					hk: "3VvHek"
				})), a.a.createElement(o.k, {
					className: l.a.primaryRouterLink,
					to: "/"
				}, r.fbt._("Go Home", null, {
					hk: "3E9E1g"
				}))),
				d = ({
					message: e
				}) => a.a.createElement("div", {
					className: l.a.container
				}, a.a.createElement("h3", {
					className: l.a.title
				}, e || r.fbt._("Sorry, You do not have permission to view this page.", null, {
					hk: "4lRbHD"
				})), a.a.createElement(o.k, {
					className: l.a.primaryRouterLink,
					to: "/"
				}, r.fbt._("Go Home", null, {
					hk: "3E9E1g"
				})))
		},
		"./src/reddit/pages/ProfileComments/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/lodash/fromPairs.js"),
				s = n.n(r),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				i = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/constants/index.ts"),
				d = n("./src/lib/extractQueryParams/index.ts"),
				m = n("./src/lib/makeListingKey/index.ts"),
				u = n("./src/reddit/actions/pages/profileComments/index.ts"),
				p = n("./src/reddit/actions/pages/profileShared.ts"),
				b = n("./src/reddit/components/ContentGate/index.tsx"),
				h = n("./src/reddit/components/EmptyProfile/index.ts"),
				f = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				w = n("./src/reddit/components/JumpToContent/index.tsx"),
				g = n("./src/lib/classNames/index.ts"),
				x = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				_ = n("./src/lib/lessComponent.tsx"),
				k = n("./src/reddit/components/ClassicPost/index.tsx"),
				v = n("./src/reddit/components/OverviewChronoList/ListItem.tsx"),
				y = n("./src/reddit/components/OverviewCommentPost/index.tsx"),
				O = n("./src/reddit/components/OverviewConversationsPost/Border/index.tsx"),
				C = n("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx"),
				E = n("./src/reddit/constants/postLayout.ts"),
				S = n("./src/reddit/contexts/PageLayer/index.tsx"),
				j = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				P = n("./src/reddit/selectors/commentSelector.ts"),
				N = n("./src/reddit/components/ProfileCommentList/ListItem.m.less"),
				L = n.n(N);

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const T = _.a.wrapped(k.default, "ClassicPost", L.a),
				R = _.a.wrapped(y.a, "OverviewCommentPost", L.a),
				D = Object(S.t)({
					currentProfileName: S.h,
					pageLayer: e => e
				}),
				B = Object(l.c)({
					comment: (e, {
						itemId: t
					}) => Object(P.a)(e, {
						commentId: t
					}),
					profileName: (e, {
						currentProfileName: t
					}) => {
						if (t) return ((e, t) => {
							const {
								users: n
							} = e, r = t.toLowerCase(), s = n.models[r];
							return s ? s.username : void 0
						})(e, t)
					}
				});
			var U = D(Object(i.b)(B)(e => {
				const {
					comment: t,
					itemId: n,
					isFirstInCommentList: r,
					isLastInCommentList: s,
					layout: a,
					profileName: i,
					allowModToolsUnderComments: l
				} = e;
				if (a === E.g.Compact) return o.a.createElement(v.a, e);
				const {
					height: c,
					width: d,
					...m
				} = e;
				return o.a.createElement(A, m, r && o.a.createElement(O.a, {
					isFirst: !0
				}, a === E.g.Large ? o.a.createElement(T, I({}, e, {
					availableWidth: d,
					inSubredditOrProfile: !1,
					isOverlay: !1
				})) : o.a.createElement(R, I({}, e, {
					commentId: n,
					profileName: i
				}))), o.a.createElement(O.a, {
					isLast: s
				}, o.a.createElement(C.a, {
					commentId: n,
					depth: t.parentId ? 1 : 0,
					isFirst: !0,
					isLast: !0,
					key: n,
					profileName: i,
					showModTools: l
				})))
			}));
			const A = Object(x.a)(e => o.a.createElement("div", {
				className: Object(g.a)(L.a.backgroundMargin, {
					[L.a.isFirstInCommentList]: e.isFirstInCommentList,
					[L.a.isLastInCommentList]: e.isLastInCommentList
				}),
				style: {
					background: Object(j.e)(e)
				}
			}, e.children));
			var F = n("./src/reddit/components/ProfileItemList/index.tsx"),
				M = n("./node_modules/lodash/noop.js"),
				H = n.n(M),
				z = n("./src/reddit/actions/ads/index.ts"),
				G = n("./src/reddit/actions/comment/list.ts"),
				W = n("./src/reddit/actions/post.ts"),
				q = n("./src/reddit/components/TrackingHelper/index.tsx"),
				K = n("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				Y = n("./src/reddit/helpers/trackers/post.ts"),
				Z = n("./src/reddit/featureFlags/index.ts"),
				V = n("./src/reddit/selectors/comments.ts"),
				J = n("./src/reddit/selectors/posts.ts"),
				X = n("./src/reddit/selectors/profileComments.ts"),
				Q = n("./src/reddit/selectors/subreddit.ts"),
				$ = n("./src/reddit/selectors/tracking.ts"),
				ee = n("./src/reddit/selectors/user.ts");
			const te = Object(S.t)(),
				ne = {
					apiError: X.a,
					apiPending: X.b,
					currentUser: ee.j,
					measureScrollFPS: Z.d.measureScrollFPS,
					layout: S.O,
					loadMore: X.d,
					subredditsById: Q.ab,
					viewportDataLoaded: $.a,
					commentsById: V.q,
					itemIds: X.f,
					itemIdToPostId: X.e,
					postsById: J.L,
					estimateItemHeight: e => (e, t, n) => {
						if (n) switch (t) {
							case E.g.Medium:
								return 174;
							case E.g.Classic:
								return 129;
							case E.g.Compact:
								return 120;
							default:
								return 140
						}
						switch (t) {
							case E.g.Medium:
							case E.g.Classic:
								return 90;
							case E.g.Compact:
								return 80;
							default:
								return 90
						}
					}
				},
				re = Object(l.c)(ne),
				se = Object(i.b)(re, e => ({
					onBottomViewed: (t, n) => e(Object(G.c)(t, n)),
					adBrandSafetyStatusReceived: t => {
						e(z.d({
							isViewSafe: t
						}))
					},
					openPost: t => e(Object(W.E)(t)),
					fireAdPixelsOfType: H.a,
					trackOnPostEnteredViewport: H.a
				}), (e, t, n) => ({
					...e,
					...t,
					...n,
					postClickEventFactory: (e, t) => Object(Y.f)(e, t),
					postComponentForLayout: K.b
				}));

			function ae() {
				return (ae = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const oe = e => o.a.createElement(U, ae({}, e, {
					allowModToolsUnderComments: !0
				})),
				ie = (e => Object(q.c)(te(se(e))))(F.a);
			var le = e => o.a.createElement(ie, ae({}, e, {
					itemComponent: oe
				})),
				ce = n("./src/reddit/components/ProfileNavMenu/index.tsx"),
				de = n("./src/reddit/components/ProfileSidebar/index.tsx"),
				me = n("./src/reddit/components/TitleTagManager/index.tsx"),
				ue = n("./src/reddit/helpers/trackers/screenview.ts"),
				pe = n("./src/reddit/layout/page/Listing/index.tsx"),
				be = n("./src/reddit/models/ContentGate.ts"),
				he = n("./src/reddit/pages/ErrorPages/index.tsx"),
				fe = n("./src/reddit/selectors/profile.ts");

			function we() {
				return (we = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const ge = Object(S.t)(),
				xe = Object(l.a)(S.B, ee.cb, (e, {
					location: t
				}) => s()([...Object(d.a)(t.search)]), S.O, (e, {
					match: t
				}) => t.params.profileName, (e, {
					match: t
				}) => Object(fe.j)(e, {
					profileName: t.params.profileName
				}), ee.K, (e, {
					match: t
				}) => Object(ee.e)(e, c.Wb + t.params.profileName), (e, {
					match: t
				}) => {
					const {
						profileName: n
					} = t.params;
					return Object(fe.q)(e, {
						profileName: n
					})
				}, (e, t, n, r, s, a, o, i, l) => {
					const {
						sort: c,
						t: d
					} = Object(p.b)(n), u = Object(m.a)(`u_${s}`, c, n);
					return {
						contentGateInfo: i,
						over18Prefs: t,
						isLoggedIn: o,
						isOwnProfile: e,
						isProfileNSFW: !!a && a.isNSFW,
						layout: r,
						listingKey: u,
						pageTitle: l,
						profileName: s,
						sort: c,
						timeSort: d
					}
				}),
				_e = Object(i.b)(xe, (e, t) => ({
					onLoadMore: () => e(Object(u.moreItemsRequested)()),
					onLayoutChange: () => e(Object(u.profileCommentsRequested)({
						...t.match,
						queryParams: s()([...Object(d.a)(t.location.search)])
					}))
				})),
				ke = e => {
					const {
						contentGateInfo: t,
						over18Prefs: n,
						isOwnProfile: r,
						isProfileNSFW: s,
						listingKey: a,
						onLoadMore: i,
						onLayoutChange: l,
						pageLayer: d,
						profileName: m,
						sort: u,
						timeSort: p
					} = e;
					if (!m || !d) return null;
					if (t && t.profileDeleted) return o.a.createElement(b.default, {
						contentGateType: be.a.ProfileDeleted,
						profileName: m
					});
					if (t && t.profileSuspended) return o.a.createElement(b.default, {
						contentGateType: be.a.ProfileSuspended,
						profileName: m
					});
					if (451 === d.status || t && t.profileBlockedForLegalReason) return o.a.createElement(b.default, {
						contentGateType: be.a.ProfileBlockedForLegalReason,
						profileName: m
					});
					if (403 === d.status) return o.a.createElement(he.a, null);
					if (404 === d.status) return o.a.createElement(b.default, {
						contentGateType: be.a.ProfileDoesNotExist,
						profileName: m
					});
					const g = m.toLowerCase(),
						x = `/user/${m}/comments/`,
						_ = {
							listingKey: a,
							listingName: g
						};
					if (!n && s && !r) return o.a.createElement(b.default, {
						contentGateType: be.a.Nsfw,
						subredditName: m
					});
					const k = {
						sort: u,
						baseUrl: x,
						sortOptions: c.ub,
						timeSort: p
					};
					return o.a.createElement(pe.a, {
						className: e.className,
						fitPageToContent: !0,
						contentNavBar: o.a.createElement(o.a.Fragment, null, o.a.createElement(ce.a, {
							profileName: m
						})),
						content: o.a.createElement(o.a.Fragment, null, o.a.createElement(f.a, k), o.a.createElement(w.a, null), o.a.createElement(le, {
							listingKey: a,
							listingName: g,
							listingViewed: (e, t) => Object(ue.o)(a, u, t, e, p),
							noPostsComponent: () => o.a.createElement(h.b, {
								profileName: m,
								timeSort: p
							}),
							onLoadMore: i,
							onTryAgain: l,
							inSubredditOrProfile: !1
						})),
						sidebar: o.a.createElement(de.a, we({}, _, {
							profileName: m
						}))
					})
				};
			t.default = ge(_e(e => {
				const {
					pageTitle: t
				} = e;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement(me.a, {
					title: t
				}), o.a.createElement(ke, e))
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileComments.223c481bd07cb45bc46f.js.map