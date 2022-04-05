// https://www.redditstatic.com/desktop2x/ProfileComments.4b00545a09f43d247b35.js
// Retrieved at 4/5/2022, 2:40:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileComments", "reddit-components-ContentGate"], {
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
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/chat/controls/Svg/index.m.less"),
				c = n.n(i);
			t.a = a.a.wrapped(e => {
				const t = {
						height: e.height || void 0,
						width: e.width || void 0
					},
					{
						disable: n,
						active: r,
						hover: a
					} = e;
				return s.a.createElement("svg", {
					className: Object(o.a)(e.className, {
						[c.a.disable]: n,
						[c.a.active]: r,
						[c.a.hover]: !!a
					}),
					viewBox: e.viewBox,
					style: t,
					onClick: e.onClick
				}, e.children)
			}, "Component", c.a)
		},
		"./src/lib/loginHref/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/config.ts"),
				s = n("./node_modules/history/esm/history.js");
			t.a = (e, t, n) => {
				const o = Object(s.e)(e),
					a = encodeURIComponent(`${t}${o}`);
				return `${r.a.accountManagerOrigin}${n||"/login"}?dest=${a}`
			}
		},
		"./src/reddit/actions/pages/profileComments/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "profileCommentsPending", (function() {
				return D
			})), n.d(t, "profileCommentsLoaded", (function() {
				return A
			})), n.d(t, "profileCommentsFailed", (function() {
				return R
			})), n.d(t, "profileCommentsRequested", (function() {
				return B
			})), n.d(t, "moreItemsPending", (function() {
				return F
			})), n.d(t, "moreItemsLoaded", (function() {
				return W
			})), n.d(t, "moreItemsFailed", (function() {
				return U
			})), n.d(t, "moreItemsRequested", (function() {
				return M
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/lodash/difference.js"),
				s = n.n(r),
				o = n("./node_modules/lodash/pick.js"),
				a = n.n(o),
				i = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/lib/makeListingKey/index.ts"),
				l = n("./src/reddit/actions/contentGate.ts"),
				d = n("./src/reddit/actions/externalAccount.ts"),
				m = n("./src/reddit/actions/moderatingSubreddits.ts"),
				u = n("./src/reddit/actions/pages/profileShared.ts"),
				p = n("./src/reddit/actions/platform.ts"),
				h = n("./src/reddit/actions/profile/index.ts"),
				b = n("./src/reddit/actions/subreddit.ts"),
				f = n("./src/reddit/constants/errors.ts"),
				w = n("./src/reddit/constants/parameters.ts"),
				g = n("./src/reddit/contexts/PageLayer/index.tsx"),
				_ = n("./src/config.ts"),
				y = n("./src/lib/addAllowQuarantinedParam/index.ts"),
				x = n("./src/lib/constants/index.ts"),
				k = n("./src/lib/makeApiRequest/index.ts"),
				C = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				v = n("./src/reddit/models/Comment/addProfileImgParam.ts"),
				O = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				S = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const E = (e, t, n, r) => {
				let s = Object(C.a)(Object(y.a)(Object(O.a)(Object(S.a)(`${_.a.gatewayUrl}/desktopapi/v1/user/${t}/comments`))));
				return r && (s = Object(v.a)(s)), Object(k.a)(e, {
					data: n,
					endpoint: s,
					method: x.jb.GET
				})
			};
			var j = n("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				P = n("./src/reddit/helpers/timeApiRoute/index.ts"),
				L = n("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				N = n("./src/reddit/selectors/profile.ts"),
				I = n("./src/reddit/selectors/profileComments.ts"),
				T = n("./src/reddit/actions/pages/profileComments/constants.ts");
			const D = Object(i.a)(T.f),
				A = Object(i.a)(T.e),
				R = Object(i.a)(T.d),
				B = e => async (t, n, r) => {
					const {
						queryParams: s,
						params: o
					} = e, {
						sort: i,
						t: g
					} = Object(u.b)(s), {
						profileName: _
					} = o, y = Object(c.a)(`u_${_}`, i, e.queryParams), {
						profileCommentsPage: x
					} = n(), k = x.commentIds[y], C = x.api.error[y], v = x.api.pending[y];
					if (await t(h.d(_)), v || k && !C) {
						if (k) {
							const e = Object(N.q)(n(), {
								profileName: _
							});
							t(p.m({
								title: e
							}))
						}
						return
					}
					const O = {
						...a()(e.queryParams, [...w.n, w.j]),
						sort: i,
						t: Object(j.a)(i, g)
					};
					t(D({
						key: y
					}));
					const S = await Object(P.a)("profileComments", () => E(r.apiContext(), _, O, Object(L.a)(n())));
					if (!S.ok) return t(R({
						account: S.body.data ? S.body.data.account : null,
						error: S.body.reason ? {
							type: S.body.reason
						} : S.error,
						key: y
					})), S.body.reason === f.a.DeletedProfile && t(Object(l.s)({
						profileName: _
					})), void t(p.n(S.status));
					const I = S.body;
					t(A({
						key: y,
						meta: n().meta,
						...I
					})), await Promise.all([t(Object(u.c)(_)), t(Object(b.q)()), t(Object(m.b)()), t(d.o(_))])
				}, F = Object(i.a)(T.c), W = Object(i.a)(T.b), U = Object(i.a)(T.a), M = () => async (e, t, n) => {
					let {
						apiContext: r
					} = n;
					const o = t(),
						{
							currentPage: i
						} = o.platform;
					if (!i || !i.routeMatch) return;
					const {
						queryParams: l,
						params: d
					} = i.routeMatch.match, {
						sort: m,
						t: p
					} = Object(u.b)(l), {
						profileName: h
					} = d, b = Object(c.a)(`u_${h}`, m, l), f = Object(I.d)(o, {
						listingKey: b
					});
					if (!f) return;
					const _ = Object(I.b)(o, {
							listingKey: b
						}),
						y = Object(I.c)(o, {
							listingKey: b
						}),
						x = y && y[f.token];
					if (_ || x) return;
					e(F({
						key: b,
						fetchedToken: f.token
					}));
					const k = await E(r(), h, {
						after: f.token,
						dist: f.dist,
						sort: m,
						t: p,
						...a()(l, w.n),
						layout: Object(g.R)(o, {}).toLowerCase()
					}, Object(L.a)(o));
					if (k.ok) {
						const t = Object(I.f)(o, {
								listingKey: b
							}),
							n = {
								...k.body,
								commentIds: s()(k.body.commentIds, t)
							};
						e(W({
							fetchedToken: f.token,
							key: b,
							meta: o.meta,
							...n
						}))
					} else e(U({
						account: k.body.data ? k.body.data.account : null,
						error: k.error,
						fetchedToken: f.token,
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
				ContainerExp: "_2l6FU0DxoyHFIOEFPg-vV6",
				containerExp: "_2l6FU0DxoyHFIOEFPg-vV6",
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
				CreateCommunityButton: "_209KUA_ej4pZVjoQbSOIf9",
				createCommunityButton: "_209KUA_ej4pZVjoQbSOIf9",
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
				InterstitialMessageWrapper: "_2xiFx6Zsb5W98_T1DOroT_",
				interstitialMessageWrapper: "_2xiFx6Zsb5W98_T1DOroT_",
				ContributorRequestButton: "_3WUsc0xUSWlcvJ0BD4jiUz",
				contributorRequestButton: "_3WUsc0xUSWlcvJ0BD4jiUz"
			}
		},
		"./src/reddit/components/ContentGate/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./src/config.ts"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router/esm/react-router.js"),
				c = n("./src/reddit/contexts/NavbarExp.ts"),
				l = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/lessComponent.tsx"),
				m = n("./src/lib/loginHref/index.ts"),
				u = n("./src/reddit/actions/contentGate.ts"),
				p = n("./src/reddit/actions/preferences.ts"),
				h = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx"),
				b = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				f = n("./src/reddit/components/Footer/index.tsx"),
				w = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				g = n("./src/reddit/components/RichTextJson/index.tsx"),
				_ = n("./src/reddit/components/SubredditSearchCarousel/async.tsx"),
				y = n("./src/reddit/components/TextWithLinks/index.tsx"),
				x = n("./src/reddit/constants/parameters.ts"),
				k = n("./src/reddit/contexts/PageLayer/index.tsx"),
				C = n("./src/reddit/controls/Button/index.tsx"),
				v = n("./src/chat/controls/Svg/index.tsx");

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var S = e => o.a.createElement(v.a, O({}, e, {
					viewBox: "-1 -1 21 21"
				}), o.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				E = n("./src/reddit/models/ContentGate.ts"),
				j = n("./src/lib/constants/index.ts"),
				P = n("./src/reddit/selectors/platform.ts"),
				L = n("./src/reddit/selectors/user.ts");
			var N = n("./src/reddit/selectors/meta.ts"),
				I = n("./src/reddit/components/ContentGate/index.m.less"),
				T = n.n(I);
			const {
				fbt: D
			} = n("./node_modules/fbt/lib/FbtPublic.js"), A = d.a.wrapped(S, "PrivateKey", T.a), R = d.a.div("ButtonsContainer", T.a), B = d.a.div("Container", T.a), F = d.a.div("ContainerExp", T.a), W = d.a.div("Description", T.a), U = d.a.div("PrivateSubredditDetails", T.a), M = d.a.div("PrivateSubredditDescription", T.a), H = d.a.h3("PrivateSubredditName", T.a), q = d.a.a("Link", T.a), G = d.a.wrapped(C.n, "LinkRouterButton", T.a), K = d.a.wrapped(C.m, "LinkButton", T.a), z = d.a.wrapped(C.q, "SecondaryLinkRouterButton", T.a), V = d.a.wrapped(C.p, "SecondaryLinkButton", T.a), Z = d.a.wrapped(G, "GoHomeLinkButton", T.a), Y = d.a.wrapped(b.a, "CreateCommunityButton", T.a), J = d.a.img("Image", T.a), X = d.a.img("ImagePlaceholder", T.a), Q = d.a.wrapped(G, "LeftLinkRouterButton", T.a), $ = d.a.wrapped(K, "LeftLinkButton", T.a), ee = d.a.wrapped(V, "SecondaryLeftLinkButton", T.a), te = d.a.wrapped(z, "SecondaryLeftLinkRouterButton", T.a), ne = d.a.h3("Title", T.a), re = d.a.div("PageBody", T.a), se = d.a.div("InterstitialMessageWrapper", T.a), oe = Object(l.c)({
				isLoggedIn: L.O,
				origin: N.j,
				user: L.k,
				isPrivateSubredditContributorRequestPending: e => (e => {
					if (!Object(L.P)(e)) return !1;
					const t = Object(P.d)(e);
					if (!t) return !1;
					const n = Object(L.f)(e, t);
					if (!n) return !1;
					if (!n.privateSubreddit) return !1;
					const {
						isContributorRequestTimestamp: r
					} = n;
					if (!r) return !1;
					const s = 30 * j.B;
					return r > Date.now() - s
				})(e),
				isSeo: N.g
			}), ae = Object(k.u)(), ie = Object(a.b)(oe, (e, t) => {
				let {
					subredditName: n
				} = t;
				return {
					continueToQuarantinedSubreddit: async () => {
						await e(p.D(n)), window.location.reload()
					},
					continueToGatedSubreddit: async () => {
						await e(p.v(n)), window.location.reload()
					},
					setNSFWPreference: async () => {
						await e(Object(u.o)())
					}
				}
			}), ce = e => {
				const {
					banMessage: t,
					contentGateType: n,
					continueToQuarantinedSubreddit: s,
					continueToGatedSubreddit: a,
					isLoggedIn: i,
					isContributorRequestsDisabled: c,
					isPrivateSubredditContributorRequestPending: l,
					isSeo: d,
					location: p,
					origin: b,
					pageLayer: f,
					quarantineRequiresEmail: k,
					quarantineMessage: C,
					quarantineMessageHtml: v,
					quarantineMessageRTJson: O,
					interstitialWarningMessage: S,
					interstitialWarningMessageHtml: j,
					interstitialWarningMessageRTJson: P,
					setNSFWPreference: L,
					subredditDescription: N,
					subredditName: I,
					user: B
				} = e, F = async () => {
					if (i ? await L() : await Object(u.n)(), d) {
						const e = new URL(window.location.href);
						e.searchParams.set(x.i, "1"), window.location.href = e.href
					} else window.location.reload()
				};
				switch (n) {
					case E.a.GoldSubreddit:
						return o.a.createElement("div", null, o.a.createElement(J, {
							src: `${r.a.assetPath}/img/gold/premium-crest.png`
						}), o.a.createElement(ne, null, D._("r/{community name} is a Reddit Premium community", [D._param("community name", I)], {
							hk: "2lyDwB"
						})), o.a.createElement(W, null, D._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), o.a.createElement(R, null, B ? o.a.createElement(ee, {
							href: `${r.a.redditUrl}/premium`,
							redditStyle: !0
						}, D._("Get Premium", null, {
							hk: "3ChWi4"
						})) : o.a.createElement($, {
							href: Object(m.a)(p, b),
							redditStyle: !0
						}, D._("Sign Up", null, {
							hk: "rvpjy"
						})), B ? o.a.createElement(G, {
							to: "/",
							redditStyle: !0
						}, D._("Go Home", null, {
							hk: "49p4or"
						})) : o.a.createElement(V, {
							href: Object(m.a)(p, b),
							redditStyle: !0
						}, D._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case E.a.Nsfw:
					case E.a.NsfwCustomFeed:
						return o.a.createElement("div", null, o.a.createElement(J, {
							src: `${r.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), o.a.createElement(ne, null, n === E.a.Nsfw ? D._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : D._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), o.a.createElement(W, null, D._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), o.a.createElement(R, null, o.a.createElement(Q, {
							to: "/",
							redditStyle: !0
						}, D._("No", null, {
							hk: "3fMglW"
						})), o.a.createElement(V, {
							onClick: F,
							redditStyle: !0
						}, D._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case E.a.PrivateSubreddit:
						return o.a.createElement("div", null, o.a.createElement(A, null), o.a.createElement(ne, null, "r/", I, " ", D._("is a private community", null, {
							hk: "7zZmq"
						})), N && N.length && o.a.createElement(U, null, o.a.createElement(H, null, "r/", I), o.a.createElement(M, null, o.a.createElement("div", null, N))), o.a.createElement(W, null, D._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", I, " ", D._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), o.a.createElement("br", null), D._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), o.a.createElement(R, null, B ? o.a.createElement(o.a.Fragment, null, !c && o.a.createElement(h.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: T.a.ContributorRequestButton,
							isContributorRequestPending: l
						}), o.a.createElement(ee, {
							href: `${r.a.redditUrl}/message/compose?to=/r/${I}`,
							redditStyle: !0
						}, D._("Message Mods", null, {
							hk: "vVe1i"
						}))) : o.a.createElement(ee, {
							href: Object(m.a)(p, b),
							redditStyle: !0
						}, D._("Sign Up", null, {
							hk: "rvpjy"
						})), o.a.createElement(G, {
							to: "/",
							redditStyle: !0
						}, D._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))), I && o.a.createElement(_.a, {
							subredditName: I
						}));
					case E.a.QuarantinedSubreddit:
						return o.a.createElement("div", null, o.a.createElement(J, {
							src: `${r.a.assetPath}/img/content-gate-icons/quarantined.png`
						}), o.a.createElement(ne, null, D._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), o.a.createElement(W, null, D._("This community is {=quarantined}", [D._param("=quarantined", o.a.createElement(q, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, D._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), o.a.createElement(se, null, O ? o.a.createElement(g.a, {
							content: O,
							rtJsonElementProps: {
								pageLayer: f
							}
						}) : v ? o.a.createElement(w.a, {
							html: v
						}) : C || D._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), D._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), o.a.createElement(R, null, ((e, t, n) => {
							return !(e && e.hasVerifiedEmail) && n ? o.a.createElement(R, null, o.a.createElement(te, {
								to: "/",
								redditStyle: !0
							}, D._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(K, {
								href: `${r.a.redditUrl}/prefs/update`,
								redditStyle: !0
							}, D._("Verify Email", null, {
								hk: "1893cq"
							}))) : o.a.createElement(R, null, o.a.createElement(Q, {
								to: "/",
								redditStyle: !0
							}, D._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(V, {
								onClick: t,
								redditStyle: !0
							}, D._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(B, s, k)));
					case E.a.GatedSubreddit:
						return o.a.createElement("div", null, o.a.createElement(ne, null, D._("Are you sure you want to view this community?", null, {
							hk: "1K5UIm"
						})), o.a.createElement(W, null, o.a.createElement(se, null, P ? o.a.createElement(g.a, {
							content: P,
							rtJsonElementProps: {
								pageLayer: f
							}
						}) : j ? o.a.createElement(w.a, {
							html: j
						}) : S), D._("Are you certain you want to continue?", null, {
							hk: "3pT969"
						})), o.a.createElement(R, null, o.a.createElement(Q, {
							to: "/",
							redditStyle: !0
						}, D._("No Thank You", null, {
							hk: "4B26AR"
						})), o.a.createElement(V, {
							onClick: a,
							redditStyle: !0
						}, D._("Continue", null, {
							hk: "2rLyAk"
						}))));
					case E.a.SubredditBanned:
						return o.a.createElement("div", null, o.a.createElement(J, {
							src: `${r.a.assetPath}/img/content-gate-icons/banned.png`
						}), o.a.createElement(ne, null, D._("r/{community name} has been banned from Reddit", [D._param("community name", I)], {
							hk: "2at9Se"
						})), (e => o.a.createElement(W, null, e ? o.a.createElement(y.a, {
							linkClassName: T.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : D._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), o.a.createElement(R, null, o.a.createElement(G, {
							to: "/",
							redditStyle: !0
						}, D._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case E.a.SubredditBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(J, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ne, null, D._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), o.a.createElement(R, null, o.a.createElement(G, {
							to: "/",
							redditStyle: !0
						}, D._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case E.a.SubredditDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(X, null), o.a.createElement(ne, null, D._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), o.a.createElement(W, null, D._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), o.a.createElement(R, null, B && o.a.createElement(Y, {
							eventSource: "content_gate"
						}), o.a.createElement(Z, {
							to: "/",
							redditStyle: !0
						}, D._("Go Home", null, {
							hk: "49p4or"
						}))));
					case E.a.ProfileDoesNotExist:
					case E.a.ProfileDeleted:
					case E.a.ProfileSuspended:
					case E.a.ProfileBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(J, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ne, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case E.a.ProfileBlockedForLegalReason:
									return D._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case E.a.ProfileDeleted:
									return D._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case E.a.ProfileSuspended:
									return o.a.createElement(o.a.Fragment, null, D._("This account has been {=suspended} .", [D._param("=suspended", o.a.createElement(q, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, D._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case E.a.ProfileDoesNotExist:
									return o.a.createElement(o.a.Fragment, null, o.a.createElement(ne, null, D._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), o.a.createElement(W, null, D._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), o.a.createElement(R, null, o.a.createElement(Z, {
							to: "/",
							redditStyle: !0
						}, D._("Go Home", null, {
							hk: "49p4or"
						}))));
					case E.a.CustomFeedDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(J, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ne, null, D._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), o.a.createElement(R, null, o.a.createElement(Z, {
							to: "/",
							redditStyle: !0
						}, D._("Go Home", null, {
							hk: "49p4or"
						}))));
					case E.a.PostBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(J, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ne, null, D._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), o.a.createElement(R, null, o.a.createElement(G, {
							to: "/",
							redditStyle: !0
						}, D._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = ae(ie(Object(i.i)(e => {
				const t = Object(s.useContext)(c.a) ? F : B;
				return o.a.createElement(t, null, o.a.createElement("div", {
					"data-testid": "content-gate"
				}, o.a.createElement(re, null, ce(e))), o.a.createElement(f.a, null))
			})))
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(r.a)({
				resolved: {},
				chunkName: () => "ContributorRequestButton",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ContributorRequestButton").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx"
				}
			});
			t.a = s
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
				o = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/actions/tooltip.ts"),
				d = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/constants/modals.ts"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				b = n("./src/reddit/selectors/user.ts"),
				f = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				w = n.n(f),
				g = n("./src/lib/lessComponent.tsx");
			const _ = "create-community-button",
				y = g.a.wrapped(d.c, "StyledTooltip", w.a),
				x = Object(i.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(b.ob)(e),
					userIsSuspended: b.W
				});
			t.a = Object(a.b)(x, (e, t) => {
				let {
					eventSource: n
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(h.c)(n)), e(Object(c.h)(u.a.SUBREDDIT_CREATION_MODAL_ID))
					},
					onShowTooltip: () => e(Object(l.f)({
						tooltipId: _
					})),
					onHideTooltip: () => e(Object(l.i)())
				}
			})(Object(m.c)(e => {
				let {
					className: t,
					eventSource: n,
					onShowTooltip: s,
					onHideTooltip: a,
					openCommunityCreation: i,
					sendEvent: c,
					userDoesNotHaveEnoughExpToCreateCommunity: l,
					userIsSuspended: d,
					onClick: m
				} = e;
				return o.a.createElement(p.t, {
					className: t,
					disabled: d || l,
					onClick: e => {
						m && m(e), i(c)
					},
					onMouseEnter: s,
					onMouseLeave: a,
					priority: p.c.Secondary,
					id: _,
					isFullWidth: !0
				}, r.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), l ? o.a.createElement(y, {
					caretOnTop: !0,
					tooltipId: _,
					text: r.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : d ? o.a.createElement(y, {
					caretOnTop: !0,
					tooltipId: _,
					text: r.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
				}) : null)
			}))
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
		"./src/reddit/components/Footer/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/config.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/Footer/index.m.less"),
				c = n.n(i);
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js"), d = a.a.div("FooterContainer", c.a), m = a.a.div("UserAgreement", c.a), u = a.a.a("UserAgreementLink", c.a), p = a.a.a("PrivacyLink", c.a);
			t.a = () => s.a.createElement(d, null, s.a.createElement(m, null, l._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy} . ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [l._param("=User Agreement", s.a.createElement(u, {
				href: `${o.a.redditUrl}/help/useragreement`
			}, l._("User Agreement", null, {
				hk: "2srkM2"
			}))), l._param("=Privacy Policy", s.a.createElement(p, {
				href: `${o.a.redditUrl}/help/privacypolicy`
			}, l._("Privacy Policy", null, {
				hk: "2nBcYA"
			}))), l._param("year", (new Date).getFullYear())], {
				hk: "335pdO"
			})))
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
				DropdownButton: "_3EHmSVytc7PNTijH2qfAan",
				dropdownButton: "_3EHmSVytc7PNTijH2qfAan",
				LayoutIcon: "_2ONLRjLuDplXKbcaS8dGe_",
				layoutIcon: "_2ONLRjLuDplXKbcaS8dGe_"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/higherOrderComponents/asTooltip.tsx"),
				l = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = n("./src/reddit/actions/preferences.ts"),
				u = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				h = n("./src/reddit/constants/postLayout.ts"),
				b = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/contexts/Tooltip.ts"),
				w = n("./src/reddit/controls/Dropdown/index.tsx"),
				g = n("./src/reddit/controls/Dropdown/Row.tsx"),
				_ = n("./src/reddit/icons/fonts/index.tsx"),
				y = n("./src/reddit/selectors/telemetry.ts"),
				x = n("./src/reddit/selectors/tooltip.ts"),
				k = n("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				C = n.n(k);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const O = "view--layout--FUE",
				S = "LayoutSwitch--picker",
				E = Object(c.a)(w.a),
				j = {
					[h.d.Card]: function(e) {
						return o.a.createElement(_.a, v({}, e, {
							name: "view_card"
						}))
					},
					[h.d.Classic]: function(e) {
						return o.a.createElement(_.a, v({}, e, {
							name: "view_classic"
						}))
					},
					[h.d.Compact]: function(e) {
						return o.a.createElement(_.a, v({}, e, {
							name: "view_compact"
						}))
					}
				},
				P = {
					[h.d.Card]: () => r.fbt._("card", null, {
						hk: "4qOOHu"
					}),
					[h.d.Classic]: () => r.fbt._("classic", null, {
						hk: "1tiTtA"
					}),
					[h.d.Compact]: () => r.fbt._("compact", null, {
						hk: "1N7pcz"
					}),
					[h.d.Search]: () => r.fbt._("search", null, {
						hk: "49uLRt"
					})
				},
				L = Object(b.u)(),
				N = Object(i.c)({
					dropdownIsOpen: Object(x.b)(S),
					postLayout: b.R,
					redditStyle: b.D
				}),
				I = Object(a.b)(N, e => ({
					onListingLayoutChange: (t, n) => e(Object(m.y)(t, n)),
					openDropdown: () => e(Object(u.h)({
						tooltipId: S
					}))
				}));
			class T extends o.a.Component {
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
							screen: Object(y.Z)(t),
							subreddit: Object(y.hb)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: n,
							onLayoutClick: r,
							postLayout: s
						} = this.props, a = n || h.e[s], i = e === a, c = j[e], d = P[e];
						return o.a.createElement(g.b, v({}, t, {
							className: Object(l.a)(C.a.LayoutItem, {
								[C.a.selected]: i,
								[C.a.DropdownButton]: null == t ? void 0 : t.showDropdownTriangle
							}),
							"data-layout": e,
							displayText: d(),
							iconWrapperClassName: C.a.LayoutItemIconWrapper,
							isSelected: i,
							noHover: i,
							onClick: i ? void 0 : () => this.changeLayout(e),
							textClassName: C.a.LayoutItemTextClassName
						}), o.a.createElement(c, {
							className: C.a.LayoutIcon,
							onClick: i ? void 0 : r,
							isFilled: i && (!t || !1 !== t.forceIconFill)
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return o.a.createElement(E, v({}, e, {
							className: C.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: C.a.DropdownRow,
							rowIconClassName: C.a.DropdownRowIcon,
							rowSelectedClassName: C.a.DropdownRowSelected,
							tooltipId: S
						}), this.renderItem(h.d.Card), this.renderItem(h.d.Classic), this.renderItem(h.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: n,
						postLayout: r
					} = this.props, s = t || h.e[r];
					return o.a.createElement("div", {
						className: Object(l.a)(C.a.Container, e),
						id: O
					}, o.a.createElement("div", {
						className: C.a.DropdownContainer,
						onClick: n
					}, this.renderItem(s, {
						id: S,
						showDropdownTriangle: !0,
						forceIconFill: !1
					}), o.a.createElement(f.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = L(I(Object(p.c)(Object(d.a)(T))))
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
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/listingSort/index.ts"),
				c = n("./src/reddit/actions/preferences.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/helpers/isListingFocused/index.tsx"),
				u = n("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				p = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/lib/addQueryParams/index.ts")),
				h = n("./src/lib/constants/index.ts"),
				b = n("./node_modules/react-router-redux/es/index.js"),
				f = n("./node_modules/reselect/es/index.js"),
				w = n("./src/reddit/actions/tooltip.ts"),
				g = n("./node_modules/fbt/lib/FbtPublic.js"),
				_ = n("./src/higherOrderComponents/asTooltip.tsx"),
				y = n("./src/reddit/constants/history.ts"),
				x = n("./src/reddit/constants/listingSorts.ts"),
				k = n("./src/reddit/contexts/Tooltip.ts"),
				C = n("./src/reddit/controls/Dropdown/index.tsx"),
				v = n("./src/reddit/controls/Dropdown/Row.tsx"),
				O = n("./src/reddit/helpers/path/index.ts"),
				S = n("./src/reddit/helpers/trackers/navigation.ts"),
				E = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				j = n("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				P = n("./src/reddit/selectors/experiments/econLeaderboards.ts"),
				L = n("./src/reddit/selectors/tooltip.ts"),
				N = n("./src/reddit/selectors/user.ts"),
				I = n("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				T = n("./src/reddit/components/ListingSort/index.m.less"),
				D = n.n(T),
				A = n("./src/lib/lessComponent.tsx");

			function R() {
				return (R = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const B = "ListingSort--SortPicker",
				F = Object(_.a)(A.a.wrapped(C.a, "Dropdown", D.a)),
				W = A.a.wrapped(I.a, "ListingSortIcon", D.a),
				U = (A.a.wrapped(E.b, "DropdownTriangle", D.a), A.a.div("Title", D.a)),
				M = A.a.wrapped(e => s.a.createElement(v.b, R({}, e, {
					noHover: !0,
					isSelected: !1
				})), "Row", D.a),
				H = e => {
					let {
						disabled: t,
						...n
					} = e;
					return s.a.createElement("div", R({}, n, {
						className: Object(a.a)(D.a.SortWrapper, n.className, {
							[D.a.isDisabled]: t
						})
					}))
				},
				q = A.a.div("DropdownRowDisabled", D.a),
				G = Object(d.u)({
					isFrontpage: d.A,
					isProfilePage: d.J,
					pageLayer: e => e
				}),
				K = Object(f.c)({
					isAwardListingExperimentEnabled: P.a,
					isBestSortPopularEnabled: j.a,
					user: N.k,
					dropdownIsOpen: (e, t) => Object(L.b)(t.dropdownId || B)(e),
					isPopularPage: d.F
				}),
				z = Object(o.b)(K, (e, t) => {
					let {
						dropdownId: n,
						pageLayer: r
					} = t;
					return {
						onOpenDropdown: () => e(Object(w.h)({
							tooltipId: n || B
						}))
					}
				});
			var V = A.a.wrapped(G(z(Object(l.c)(e => s.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, !1 !== e.showTitle && s.a.createElement(U, null, g.fbt._("Sort", null, {
					hk: "2BfINq"
				})), s.a.createElement(H, {
					disabled: e.disabled
				}, e.children || s.a.createElement(M, {
					className: e.buttonClassName,
					displayText: Object(x.a)(e.sort),
					id: e.dropdownId || B,
					showDropdownTriangle: !0
				}, s.a.createElement(W, {
					sort: e.sort
				}))), s.a.createElement(k.a.Consumer, null, t => s.a.createElement(F, R({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: e.dropdownId || B
				}, t, {
					renderContentsHidden: !0
				}), e.disabled ? s.a.createElement(q, null, g.fbt._("Coming soon", null, {
					hk: "taPqm"
				})) : (e.sortOptions || ((e, t, n, r, s) => {
					const o = [h.W.HOT, h.W.NEW, h.W.TOP, h.W.RISING];
					return (e && (n || r) || t && r) && o.unshift(h.W.BEST), t && s && o.splice(3, 0, h.W.AWARDED), o
				})(e.isFrontpage, e.isPopularPage, e.user, e.isBestSortPopularEnabled, e.isAwardListingExperimentEnabled)).map(t => {
					const n = e.isProfilePage ? Object(p.a)(e.baseUrl, {
							sort: t
						}) : Object(O.a)(e.baseUrl, `${t}/`),
						r = n.split("?")[0],
						o = e.isProfilePage ? n.replace(r + "?", "") : void 0;
					return s.a.createElement(v.b, {
						className: Object(a.a)(e.rowClassName, e.sort === t ? e.rowSelectedClassName : void 0),
						displayText: Object(x.a)(t),
						onClick: () => {
							e.onChange(t), e.sendEvent(Object(S.b)(t))
						},
						href: {
							pathname: r,
							state: {
								[y.b.FeedLoadReason]: y.a.SortChange
							},
							search: o
						},
						isSelected: e.sort === t,
						key: t
					}, s.a.createElement(W, {
						className: e.rowIconClassName,
						sort: t
					}))
				}))))))), "ListingSort", D.a),
				Z = n("./src/reddit/constants/parameters.ts");
			const Y = e => {
					const t = J[e];
					return t && t() || ""
				},
				J = {
					[h.ec.AllStates]: () => g.fbt._("All", null, {
						hk: "3FfdRL"
					}),
					[h.ec.Alaska]: () => g.fbt._("alaska", null, {
						hk: "3PQz70"
					}),
					[h.ec.Alabama]: () => g.fbt._("alabama", null, {
						hk: "1Ain9C"
					}),
					[h.ec.Arkansas]: () => g.fbt._("arkansas", null, {
						hk: "3MSLfs"
					}),
					[h.ec.Arizona]: () => g.fbt._("arizona", null, {
						hk: "PjKyy"
					}),
					[h.ec.California]: () => g.fbt._("california", null, {
						hk: "4fS2Uy"
					}),
					[h.ec.Colorado]: () => g.fbt._("colorado", null, {
						hk: "2FU5sm"
					}),
					[h.ec.Connecticut]: () => g.fbt._("connecticut", null, {
						hk: "3HJ97l"
					}),
					[h.ec.DistrictOfColumbia]: () => g.fbt._("district of columbia", null, {
						hk: "43sboQ"
					}),
					[h.ec.Delaware]: () => g.fbt._("delaware", null, {
						hk: "1sMYnC"
					}),
					[h.ec.Florida]: () => g.fbt._("florida", null, {
						hk: "1ahnDc"
					}),
					[h.ec.Georgia]: () => g.fbt._("georgia", null, {
						hk: "3O8sgW"
					}),
					[h.ec.Hawaii]: () => g.fbt._("hawaii", null, {
						hk: "11be3k"
					}),
					[h.ec.Iowa]: () => g.fbt._("iowa", null, {
						hk: "15vW0A"
					}),
					[h.ec.Idaho]: () => g.fbt._("idaho", null, {
						hk: "12whY2"
					}),
					[h.ec.Illinois]: () => g.fbt._("illinois", null, {
						hk: "4F6qqr"
					}),
					[h.ec.Indiana]: () => g.fbt._("indiana", null, {
						hk: "1Xvs3I"
					}),
					[h.ec.Kansas]: () => g.fbt._("kansas", null, {
						hk: "4yvtHS"
					}),
					[h.ec.Kentucky]: () => g.fbt._("kentucky", null, {
						hk: "3iqD7X"
					}),
					[h.ec.Louisiana]: () => g.fbt._("louisiana", null, {
						hk: "1pM17K"
					}),
					[h.ec.Massachusetts]: () => g.fbt._("massachusetts", null, {
						hk: "3Hx5EP"
					}),
					[h.ec.Maryland]: () => g.fbt._("maryland", null, {
						hk: "62JHL"
					}),
					[h.ec.Maine]: () => g.fbt._("maine", null, {
						hk: "2Sh6yp"
					}),
					[h.ec.Michigan]: () => g.fbt._("michigan", null, {
						hk: "2fnY28"
					}),
					[h.ec.Minnesota]: () => g.fbt._("minnesota", null, {
						hk: "4diMsG"
					}),
					[h.ec.Missouri]: () => g.fbt._("missouri", null, {
						hk: "3QuF4u"
					}),
					[h.ec.Mississippi]: () => g.fbt._("mississippi", null, {
						hk: "28v1kQ"
					}),
					[h.ec.Montana]: () => g.fbt._("montana", null, {
						hk: "20sZYn"
					}),
					[h.ec.NorthCarolina]: () => g.fbt._("north carolina", null, {
						hk: "BUaf7"
					}),
					[h.ec.NorthDakota]: () => g.fbt._("north dakota", null, {
						hk: "1WRpz0"
					}),
					[h.ec.Nebraska]: () => g.fbt._("nebraska", null, {
						hk: "XUJCr"
					}),
					[h.ec.NewHampshire]: () => g.fbt._("new hampshire", null, {
						hk: "ga6kK"
					}),
					[h.ec.NewJersey]: () => g.fbt._("new jersey", null, {
						hk: "3Sz9QN"
					}),
					[h.ec.NewMexico]: () => g.fbt._("new mexico", null, {
						hk: "i2870"
					}),
					[h.ec.Nevada]: () => g.fbt._("nevada", null, {
						hk: "2DsBxU"
					}),
					[h.ec.NewYork]: () => g.fbt._("new york", null, {
						hk: "2wKULo"
					}),
					[h.ec.Ohio]: () => g.fbt._("ohio", null, {
						hk: "1KDnKA"
					}),
					[h.ec.Oklahoma]: () => g.fbt._("oklahoma", null, {
						hk: "2P0Ita"
					}),
					[h.ec.Oregon]: () => g.fbt._("oregon", null, {
						hk: "3CqdY4"
					}),
					[h.ec.Pennsylvania]: () => g.fbt._("pennsylvania", null, {
						hk: "2skMK"
					}),
					[h.ec.RhodeIsland]: () => g.fbt._("rhode island", null, {
						hk: "120MAU"
					}),
					[h.ec.SouthCarolina]: () => g.fbt._("south carolina", null, {
						hk: "3JyeG9"
					}),
					[h.ec.SouthDakota]: () => g.fbt._("south dakota", null, {
						hk: "4to42L"
					}),
					[h.ec.Tennessee]: () => g.fbt._("tennessee", null, {
						hk: "gHo1c"
					}),
					[h.ec.Texas]: () => g.fbt._("texas", null, {
						hk: "3dgz4M"
					}),
					[h.ec.Utah]: () => g.fbt._("utah", null, {
						hk: "22zf2i"
					}),
					[h.ec.Virginia]: () => g.fbt._("virginia", null, {
						hk: "1dvXBl"
					}),
					[h.ec.Vermont]: () => g.fbt._("vermont", null, {
						hk: "1Cdmbu"
					}),
					[h.ec.Washington]: () => g.fbt._("washington", null, {
						hk: "hhztG"
					}),
					[h.ec.Wisconsin]: () => g.fbt._("wisconsin", null, {
						hk: "3SOyMZ"
					}),
					[h.ec.WestVirginia]: () => g.fbt._("west virginia", null, {
						hk: "1jIKYD"
					}),
					[h.ec.Wyoming]: () => g.fbt._("wyoming", null, {
						hk: "1QaJzt"
					})
				};
			var X = n("./src/reddit/components/StateSort/index.m.less"),
				Q = n.n(X);

			function $() {
				return ($ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const ee = A.a.wrapped(C.a, "_Dropdown", Q.a),
				te = Object(_.a)(ee),
				ne = e => {
					return e.indexOf("_") > 0 && se(e) === h.A.UnitedStates
				},
				re = e => {
					if (ne(e)) {
						return e.split("_")[1]
					}
					return h.ec.AllStates
				},
				se = e => {
					if (e && e.indexOf("_") > 0) {
						return e.split("_")[0]
					}
					return e
				},
				oe = e => {
					const t = se(e),
						n = re(e);
					return ne(e) ? `${t}_${n}` : t
				},
				ae = Object(d.u)(),
				ie = Object(f.c)({
					dropdownIsOpen: Object(L.b)("StateSort--StateSortPicker")
				}),
				ce = Object(o.b)(ie, e => ({
					onOpenDropdown: () => e(Object(w.h)({
						tooltipId: "StateSort--StateSortPicker"
					})),
					onClickLink: (t, n) => {
						e(Object(b.b)(t)), e(Object(c.w)(h.A.UnitedStates + "_" + n))
					}
				}));
			var le = A.a.wrapped(ae(ce(e => {
				const t = `${e.baseUrl}?${Z.j}=${h.A.UnitedStates}`;
				return s.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, s.a.createElement(H, {
					className: e.wrapperClassName,
					disabled: e.disabled
				}, s.a.createElement(M, {
					className: e.buttonClassName,
					displayText: e.showStateAbbreviations && e.sort ? e.sort : Y(e.sort),
					id: "StateSort--StateSortPicker",
					showDropdownTriangle: !0
				})), s.a.createElement(k.a.Consumer, null, n => s.a.createElement(te, $({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "StateSort--StateSortPicker"
				}, n, {
					renderContentsHidden: !0
				}), Object.keys(h.ec).map(n => {
					const r = h.ec[n];
					return s.a.createElement("div", {
						onClick: () => e.onClickLink((e => e === h.ec.AllStates ? t : `${t}_${e}`)(r), oe(r))
					}, s.a.createElement(v.b, {
						className: Object(a.a)(e.rowClassName, e.sort === r ? e.rowSelectedClassName : void 0),
						displayText: Y(r),
						isSelected: e.sort === r
					}))
				}))))
			})), "Component", Q.a);
			const de = {
				[h.A.Everywhere]: () => g.fbt._("Everywhere", null, {
					hk: "3ysAHX"
				}),
				[h.A.UnitedStates]: () => g.fbt._("United States", null, {
					hk: "qrsat"
				}),
				[h.A.Argentina]: () => g.fbt._("Argentina", null, {
					hk: "1tWd87"
				}),
				[h.A.Australia]: () => g.fbt._("Australia", null, {
					hk: "2c0yTh"
				}),
				[h.A.Bulgaria]: () => g.fbt._("Bulgaria", null, {
					hk: "2mbkzD"
				}),
				[h.A.Canada]: () => g.fbt._("Canada", null, {
					hk: "1bnYIf"
				}),
				[h.A.Chile]: () => g.fbt._("Chile", null, {
					hk: "2eNYaZ"
				}),
				[h.A.Colombia]: () => g.fbt._("Colombia", null, {
					hk: "2sw6kC"
				}),
				[h.A.Croatia]: () => g.fbt._("Croatia", null, {
					hk: "4vRKYu"
				}),
				[h.A.CzechRepublic]: () => g.fbt._("Czech Republic", null, {
					hk: "21xzwE"
				}),
				[h.A.Finland]: () => g.fbt._("Finland", null, {
					hk: "jmDeD"
				}),
				[h.A.France]: () => g.fbt._("France", null, {
					hk: "1fX2Y8"
				}),
				[h.A.Germany]: () => g.fbt._("Germany", null, {
					hk: "2mADuB"
				}),
				[h.A.Greece]: () => g.fbt._("Greece", null, {
					hk: "UUFTD"
				}),
				[h.A.Hungary]: () => g.fbt._("Hungary", null, {
					hk: "4tz4jk"
				}),
				[h.A.Iceland]: () => g.fbt._("Iceland", null, {
					hk: "4mwr9S"
				}),
				[h.A.India]: () => g.fbt._("India", null, {
					hk: "omZ5C"
				}),
				[h.A.Ireland]: () => g.fbt._("Ireland", null, {
					hk: "3rG4DM"
				}),
				[h.A.Italy]: () => g.fbt._("Italy", null, {
					hk: "3EvGjk"
				}),
				[h.A.Japan]: () => g.fbt._("Japan", null, {
					hk: "3EAE8v"
				}),
				[h.A.Malaysia]: () => g.fbt._("Malaysia", null, {
					hk: "MgsVM"
				}),
				[h.A.Mexico]: () => g.fbt._("Mexico", null, {
					hk: "4ibMpW"
				}),
				[h.A.NewZealand]: () => g.fbt._("New Zealand", null, {
					hk: "3LwpKe"
				}),
				[h.A.Philippines]: () => g.fbt._("Philippines", null, {
					hk: "jokzr"
				}),
				[h.A.Poland]: () => g.fbt._("Poland", null, {
					hk: "2v19X3"
				}),
				[h.A.Portugal]: () => g.fbt._("Portugal", null, {
					hk: "2HNYp5"
				}),
				[h.A.PuertoRico]: () => g.fbt._("Puerto Rico", null, {
					hk: "22QgWG"
				}),
				[h.A.Romania]: () => g.fbt._("Romania", null, {
					hk: "5HuLT"
				}),
				[h.A.Serbia]: () => g.fbt._("Serbia", null, {
					hk: "3ly2Z0"
				}),
				[h.A.Singapore]: () => g.fbt._("Singapore", null, {
					hk: "3qEBqp"
				}),
				[h.A.Spain]: () => g.fbt._("Spain", null, {
					hk: "44RpFE"
				}),
				[h.A.Sweden]: () => g.fbt._("Sweden", null, {
					hk: "A5nWO"
				}),
				[h.A.Taiwan]: () => g.fbt._("Taiwan", null, {
					hk: "IHujb"
				}),
				[h.A.Thailand]: () => g.fbt._("Thailand", null, {
					hk: "1c8zJr"
				}),
				[h.A.Turkey]: () => g.fbt._("Turkey", null, {
					hk: "11Xk7x"
				}),
				[h.A.UnitedKingdom]: () => g.fbt._("United Kingdom", null, {
					hk: "rs1fl"
				})
			};
			var me = n("./src/reddit/components/CountrySort/index.m.less"),
				ue = n.n(me);

			function pe() {
				return (pe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const he = "CountrySort--CountrySortPicker",
				be = Object(d.u)(),
				fe = Object(f.c)({
					dropdownIsOpen: Object(L.b)(he)
				});
			var we = be(Object(o.b)(fe, e => ({
					onCloseDropdown: t => e(Object(w.j)({
						tooltipId: t
					})),
					onOpenDropdown: t => e(Object(w.g)({
						tooltipId: t
					})),
					onClickLink: (t, n) => {
						e(Object(b.b)(t, {
							[y.b.FeedLoadReason]: y.a.GeoModeChange
						})), e(Object(c.w)(n))
					}
				}))(e => {
					const t = se(e.sort),
						n = re(e.sort),
						r = `${e.baseUrl}?${Z.j}=`;
					return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
						className: Object(a.a)(ue.a.countrySort, e.className),
						onClick: () => e.dropdownIsOpen ? e.onCloseDropdown(he) : e.onOpenDropdown(he)
					}, s.a.createElement(H, {
						className: e.wrapperClassName,
						disabled: e.disabled
					}, s.a.createElement(M, {
						className: e.buttonClassName,
						displayText: (() => t in de ? de[t]() : de[h.A.Everywhere]())(),
						id: he,
						showDropdownTriangle: !0
					})), s.a.createElement(k.a.Consumer, null, n => s.a.createElement(te, pe({
						className: e.dropdownClassName,
						isOpen: e.dropdownIsOpen,
						tooltipId: he
					}, n, {
						renderContentsHidden: !0
					}), Object.keys(h.A).map(n => {
						const o = h.A[n];
						return s.a.createElement("div", {
							key: o,
							onClick: () => e.onClickLink(`${r}${oe(o)}`, o)
						}, s.a.createElement(v.b, {
							className: Object(a.a)(e.rowClassName, t === o ? e.rowSelectedClassName : void 0),
							displayText: de[o](),
							isSelected: t === o
						}))
					})))), t === h.A.UnitedStates && s.a.createElement(le, {
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
				ge = n("./node_modules/path-browserify/index.js"),
				_e = n.n(ge),
				ye = n("./src/reddit/components/TimeSort/index.m.less"),
				xe = n.n(ye);

			function ke() {
				return (ke = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const Ce = Object(_.a)(C.a),
				ve = A.a.div("ListingSortContainer", xe.a),
				Oe = Object(d.u)(),
				Se = Object(f.c)({
					dropdownIsOpen: Object(L.b)("TimeSort--SortPicker")
				});
			var Ee = Oe(Object(o.b)(Se, e => ({
					onOpenDropdown: () => e(Object(w.h)({
						tooltipId: "TimeSort--SortPicker"
					}))
				}))(Object(l.c)(e => s.a.createElement(ve, {
					className: e.className,
					onClick: e.onOpenDropdown
				}, s.a.createElement(H, {
					className: e.wrapperClassName,
					disabled: !1
				}, s.a.createElement(M, {
					className: e.buttonClassName,
					displayText: Object(x.b)(e.timeSort),
					id: "TimeSort--SortPicker",
					showDropdownTriangle: !0
				})), s.a.createElement(k.a.Consumer, null, t => s.a.createElement(Ce, ke({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "TimeSort--SortPicker"
				}, t), [h.hc.HOUR, h.hc.DAY, h.hc.WEEK, h.hc.MONTH, h.hc.YEAR, h.hc.ALL].map(t => {
					const n = ((e, t) => {
							let n = e.url;
							return e.urlParams.sort || Object(d.J)(e) || (n = _e.a.join(n, t)), n
						})(e.pageLayer, e.listingSort),
						r = Object(p.a)(n, {
							[Z.E]: t
						}),
						o = r.split("?")[0],
						i = `${r.replace(o+"?","")}`;
					return s.a.createElement(v.b, {
						className: Object(a.a)(e.rowClassName, e.timeSort === t ? e.rowSelectedClassName : void 0),
						key: `time_sort_${t}`,
						displayText: Object(x.b)(t),
						href: {
							pathname: o,
							state: {
								[y.b.FeedLoadReason]: y.a.SortChange
							},
							search: i
						},
						isSelected: e.timeSort === t,
						onClick: () => {
							e.onChange(t), e.sendEvent(Object(S.d)(t))
						}
					})
				}))))))),
				je = n("./src/reddit/constants/listings.ts"),
				Pe = n("./src/reddit/controls/Button/index.tsx"),
				Le = n("./src/reddit/icons/fonts/index.tsx"),
				Ne = n("./src/reddit/selectors/meta.ts"),
				Ie = n("./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less"),
				Te = n.n(Ie);

			function De() {
				return (De = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const Ae = new Set([h.W.CONTROVERSIAL, h.W.TOP]),
				Re = new Set([h.W.CONTROVERSIAL, h.W.RISING]),
				Be = new Set([h.W.CONTROVERSIAL]),
				Fe = "ListingSort--Overflow",
				We = Object(d.u)({
					isFrontpage: d.A,
					isProfilePage: d.J,
					pageLayer: e => e
				}),
				Ue = Object(f.a)((e, t) => t.sortOptions, (e, t) => t.isFrontpage, j.a, N.k, d.F, P.a, Ne.i, (e, t, n, r, s, o, a) => {
					if (e) return {
						isPopularPage: s,
						sortOptions: e,
						locale: a
					};
					const i = [h.W.HOT, h.W.NEW, h.W.TOP, h.W.RISING];
					return (t && (r || n) || s && n) && i.unshift(h.W.BEST), s && o && i.splice(3, 0, h.W.AWARDED), {
						isPopularPage: s,
						sortOptions: i,
						locale: a
					}
				});
			class Me extends s.a.Component {
				constructor() {
					super(...arguments), this.changeSort = e => {
						this.props.onChange(e), this.props.sendEvent(Object(S.b)(e))
					}, this.renderSortButton = e => {
						const {
							sort: t,
							baseUrl: n,
							isProfilePage: r
						} = this.props, o = r ? Object(p.a)(n, {
							sort: e
						}) : Object(O.a)(n, `${e}/`), i = o.split("?")[0], c = r ? o.replace(i + "?", "") : void 0;
						return s.a.createElement(Pe.t, {
							className: Object(a.a)(Te.a.SortLink, e === t && Te.a.selected),
							kind: Pe.b.InternalLink,
							priority: Pe.c.Plain,
							Icon: n => s.a.createElement(W, De({}, n, {
								className: Object(a.a)(Te.a.SortIcon, n.className),
								sort: e,
								isFilled: e === t
							})),
							text: Object(x.a)(e),
							onClick: () => this.changeSort(e),
							to: {
								pathname: i,
								state: {
									[y.b.FeedLoadReason]: y.a.SortChange
								},
								search: c
							},
							key: e
						})
					}, this.renderSort = e => {
						const {
							disabled: t,
							geopopularSort: n,
							isPopularPage: r,
							sort: o
						} = this.props, a = r && !!n && e === h.W.HOT && o === h.W.HOT;
						return s.a.createElement(s.a.Fragment, {
							key: e
						}, this.renderSortButton(e), a && s.a.createElement(we, {
							baseUrl: je.c[je.b.Popular],
							buttonClassName: Te.a.DropdownButton,
							className: Te.a.CountrySort,
							disabled: t,
							dropdownClassName: Te.a.Dropdown,
							rowClassName: Te.a.DropdownRow,
							rowSelectedClassName: Te.a.DropdownRowSelected,
							wrapperClassName: Te.a.DropdownSortWrapper,
							showStateAbbreviations: !0,
							sort: n,
							stateSortClassName: Te.a.StateSort
						}))
					}
				}
				isLocaleDependentOverflowSort(e) {
					const {
						sort: t,
						isPopularPage: n,
						locale: r
					} = this.props;
					return !r.startsWith("en") && (n ? e === h.W.AWARDED && (t === h.W.HOT || t === h.W.TOP) : e === h.W.BEST && t === h.W.TOP)
				}
				isWideSortCurrentSelected(e) {
					const {
						sort: t
					} = this.props, n = new Set([h.W.TOP, h.W.NEW]);
					return Be.has(t) && n.has(e)
				}
				isOverflowSort(e) {
					return Re.has(e) || this.isLocaleDependentOverflowSort(e) || this.isWideSortCurrentSelected(e)
				}
				render() {
					const {
						className: e,
						disabled: t,
						onTimeSortChange: n,
						sort: r,
						sortOptions: o,
						timeSort: i
					} = this.props, c = !t && Ae.has(r), l = Re.has(r), d = o.filter(e => !this.isOverflowSort(e)), m = o.filter(e => this.isOverflowSort(e) && e !== r);
					return s.a.createElement(s.a.Fragment, null, s.a.createElement(V, De({}, this.props, {
						buttonClassName: Te.a.DropdownButton,
						className: Object(a.a)(Te.a.SortDropdown, e),
						rowClassName: Te.a.DropdownRow,
						rowIconClassName: Te.a.DropdownRowIcon,
						rowSelectedClassName: Te.a.DropdownRowSelected,
						showTitle: !1
					})), s.a.createElement("div", {
						className: Object(a.a)(Te.a.SortButtons, e)
					}, d.map(this.renderSort)), l && this.renderSort(r), c && s.a.createElement(Ee, {
						buttonClassName: Te.a.DropdownButton,
						className: Te.a.TimeSort,
						dropdownClassName: Te.a.Dropdown,
						listingSort: r,
						onChange: n,
						rowClassName: Te.a.DropdownRow,
						rowSelectedClassName: Te.a.DropdownRowSelected,
						timeSort: i || h.ic,
						wrapperClassName: Te.a.DropdownSortWrapper
					}), m.length > 0 && s.a.createElement(V, De({}, this.props, {
						className: Object(a.a)(Te.a.SortOverflow, e),
						dropdownClassName: Te.a.Dropdown,
						dropdownId: Fe,
						rowClassName: Te.a.DropdownRow,
						rowIconClassName: Te.a.DropdownRowIcon,
						rowSelectedClassName: Te.a.DropdownRowSelected,
						showTitle: !1,
						sortOptions: m
					}), s.a.createElement("button", {
						className: Te.a.SortOverflowButton,
						id: Fe
					}, s.a.createElement(Le.a, {
						name: "overflow_horizontal"
					}))))
				}
			}
			var He = We(Object(o.b)(Ue)(Object(l.c)(Me))),
				qe = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less"),
				Ge = n.n(qe);
			const Ke = Object(d.u)({
					isProfilePage: d.J,
					pageLayer: e => e
				}),
				ze = Object(o.b)(null, (e, t) => {
					let {
						subredditId: n
					} = t;
					return {
						updateSortPreference: (t, r) => {
							if (n) {
								const s = Object(i.c)({
									sort: t,
									timeSort: r
								});
								e(Object(c.J)(n, s))
							}
						}
					}
				});
			class Ve extends s.a.Component {
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
						isProfilePage: o,
						sort: i,
						sortOptions: c,
						subredditId: l,
						timeSort: d,
						updateSortPreference: m
					} = this.props;
					return s.a.createElement("div", {
						className: Object(a.a)(Ge.a.Container, t),
						onBlur: this.blurListingBroadcast,
						onFocus: this.focusListingBroadcast
					}, s.a.createElement(He, {
						baseUrl: e,
						disabled: r,
						geopopularSort: n,
						onChange: m,
						onTimeSortChange: this.updateTimeSort,
						sort: i,
						sortOptions: c,
						timeSort: d
					}), !o && s.a.createElement(u.a, {
						className: Ge.a.LayoutSwitch,
						subredditId: l
					}))
				}
			}
			t.a = Ke(ze(Object(l.c)(Ve)))
		},
		"./src/reddit/components/ListingSort/ListingSortIcon.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/reddit/icons/fonts/index.tsx"),
				c = n("./src/reddit/controls/Dropdown/index.m.less"),
				l = n.n(c);
			const d = {
				[a.W.BEST]: "best",
				[a.W.HOT]: "hot",
				[a.W.NEW]: "new",
				[a.W.CONTROVERSIAL]: "controversial",
				[a.W.TOP]: "top",
				[a.W.RISING]: "rising",
				[a.W.AWARDED]: "award"
			};

			function m(e) {
				let {
					className: t,
					isFilled: n,
					sort: r
				} = e;
				return d[r] ? s.a.createElement(i.a, {
					name: d[r],
					isFilled: n,
					className: Object(o.a)(t, l.a.iconStyles)
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
		"./src/reddit/components/OverviewChronoComment/index.m.less": function(e, t, n) {
			e.exports = {
				commentOuterWrapper: "_1g70Ndz7edo5LA6hie1Gkt",
				commentWrapper: "_324SLny5spJ682AiI73uBO",
				isLast: "_2nq8DZns5TUNKoe0aDsW4K",
				isAwarded: "_3L-s9jSlG2xSayzJ_b7J1t",
				isNightmodeOn: "Cd5iGkxl9fzuGE1cWMHC4",
				isFirst: "q4WgOJAmvFRFKX_yrlG-1",
				commentSeparator: "_3H85Xyyv141qju7KQFQ_d5",
				commentContentWrapper: "_27uDfyCMhkucg8xWyoTLYp"
			}
		},
		"./src/reddit/components/OverviewChronoList/ListItem.m.less": function(e, t, n) {
			e.exports = {
				OverviewCommentPost: "_2mg6JuVCrcHWJkUQvZXFcZ",
				overviewCommentPost: "_2mg6JuVCrcHWJkUQvZXFcZ",
				ClassicPost: "OZOlqlxhdnIVuS5MQ5yMi",
				classicPost: "OZOlqlxhdnIVuS5MQ5yMi"
			}
		},
		"./src/reddit/components/OverviewChronoList/ListItem.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/components/ClassicPost/index.tsx"),
				a = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/react-redux/es/index.js")),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/constants/gold.ts"),
				l = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/components/CommentContainer/index.tsx"),
				p = n("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				h = n("./src/reddit/helpers/getClickInfo.ts"),
				b = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				f = n("./src/reddit/selectors/commentSelector.ts"),
				w = n("./src/reddit/selectors/communityAwards.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				_ = n("./src/reddit/components/OverviewChronoComment/index.m.less"),
				y = n.n(_);
			const x = Object(a.b)(() => Object(i.c)({
				comment: f.b,
				isAwarded: (e, t) => {
					const n = Object(f.b)(e, t);
					return !(!n || !n.awardCountsById) && Object.keys(n.awardCountsById).some(t => {
						const n = Object(w.a)(e, t);
						return n && n.coinPrice >= c.g
					})
				},
				isNightmodeOn: g.cb
			}), e => ({
				openPost: t => e(Object(m.L)(t))
			}));
			var k = Object(d.a)(x(e => {
					const {
						comment: t,
						commentId: n,
						first: r,
						isAwarded: o,
						isNightmodeOn: a,
						last: i,
						openPost: c,
						showModTools: d
					} = e;
					if (!t) return null;
					return s.a.createElement(u.a, {
						comment: t,
						onClick: (e, t) => {
							c({
								postOrComment: t,
								clickInfo: Object(h.a)(e),
								queryParams: {
									context: 3
								}
							})
						},
						style: {
							background: Object(b.e)(e)
						}
					}, s.a.createElement("div", {
						className: Object(l.a)(y.a.commentOuterWrapper, {
							[y.a.isLast]: i,
							[y.a.isAwarded]: o,
							[y.a.isNightmodeOn]: a
						})
					}, s.a.createElement("div", {
						className: Object(l.a)(y.a.commentWrapper, {
							[y.a.isFirst]: r
						})
					}, s.a.createElement("div", {
						className: y.a.commentSeparator
					}), t.parentId && s.a.createElement("div", {
						className: y.a.commentSeparator
					}), s.a.createElement("div", {
						className: y.a.commentContentWrapper
					}, s.a.createElement(p.a, {
						commentId: n,
						commentsPageKey: "profileOverviewPageKey",
						showFlatlist: !0,
						showModTools: d,
						isExpanded: !0
					})))))
				})),
				C = n("./src/reddit/components/OverviewCommentPost/index.tsx"),
				v = n("./src/reddit/contexts/PageLayer/index.tsx"),
				O = n("./src/reddit/helpers/isComment.ts"),
				S = n("./src/reddit/components/OverviewChronoList/ListItem.m.less"),
				E = n.n(S),
				j = n("./src/lib/lessComponent.tsx");

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const L = Object(v.u)({
					currentProfileName: v.i,
					isCommentsPage: v.x,
					isCommentPermalink: v.w,
					isProfilePostListing: v.L,
					pageLayer: e => e
				}),
				N = j.a.wrapped(C.a, "OverviewCommentPost", E.a),
				I = j.a.wrapped(o.default, "ClassicPost", E.a);
			t.a = L(e => {
				const {
					itemId: t,
					isFirstInCommentList: n,
					isLastInCommentList: r,
					allowModToolsUnderComments: o,
					height: a,
					width: i,
					...c
				} = e;
				return Object(O.a)(t) ? n ? s.a.createElement(s.a.Fragment, null, s.a.createElement(N, P({}, c, {
					availableWidth: i,
					commentId: t
				})), s.a.createElement(k, {
					commentId: t,
					first: n,
					last: r,
					showModTools: o
				})) : s.a.createElement(k, {
					commentId: t,
					first: n,
					last: r,
					showModTools: o
				}) : s.a.createElement(I, P({}, c, {
					inSubredditOrProfile: !1
				}))
			})
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
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/OverviewConversationsPost/Border/index.m.less"),
				i = n.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				let {
					className: t,
					isFirst: n,
					isLast: r,
					...a
				} = e;
				return s.a.createElement("div", c({
					className: Object(o.a)(i.a.border, {
						[i.a.isFirst]: n,
						[i.a.isLast]: r
					}, t)
				}, a))
			}
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
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/reddit/constants/gold.ts"),
				d = n("./src/lib/classNames/index.ts"),
				m = n("./src/lib/lessComponent.tsx"),
				u = n("./src/reddit/components/CommentContainer/index.tsx"),
				p = n("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				h = n("./src/reddit/actions/post.ts"),
				b = n("./src/reddit/helpers/getClickInfo.ts"),
				f = n("./src/reddit/selectors/commentSelector.ts"),
				w = n("./src/reddit/selectors/communityAwards.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				_ = n("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.m.less"),
				y = n.n(_);
			const x = m.a.div("ProfileOwnerCommentWrapper", y.a),
				k = m.a.div("CommentContentWrapper", y.a),
				C = m.a.div("Wrapper", y.a),
				v = m.a.div("CommentSeparator", y.a),
				O = Object(i.b)(() => Object(c.c)({
					comment: (e, t) => Object(f.b)(e, t),
					isAwarded: (e, t) => {
						const n = Object(f.b)(e, t);
						return !(!n || !n.awardCountsById) && Object.keys(n.awardCountsById).some(t => {
							const n = Object(w.a)(e, t);
							return n && n.coinPrice >= l.g
						})
					},
					isNightmodeOn: g.cb
				}), e => ({
					openPost: t => e(Object(h.L)(t))
				}));
			class S extends a.a.Component {
				render() {
					const {
						comment: e,
						commentId: t,
						depth: n,
						openPost: r,
						isAwarded: o,
						isFirst: i,
						isLast: c,
						isNightmodeOn: l,
						profileName: m,
						showModTools: p
					} = this.props, h = m === e.author ? E : j;
					return a.a.createElement(u.a, {
						comment: e,
						onClick: (e, t) => {
							r({
								postOrComment: t,
								clickInfo: Object(b.a)(e),
								queryParams: {
									context: 3
								}
							}), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
						}
					}, a.a.createElement(C, {
						className: Object(d.a)({
							[y.a.isFirst]: i,
							[y.a.isLast]: c,
							[y.a.isAwarded]: o,
							[y.a.isNightmodeOn]: l
						})
					}, s()(n + 1, e => a.a.createElement(v, {
						key: e
					})), a.a.createElement(k, null, h(t, m, p))))
				}
			}
			const E = (e, t, n) => a.a.createElement(x, null, j(e, t, n, !0, !0)),
				j = function(e, t, n) {
					let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
						s = arguments.length > 4 ? arguments[4] : void 0;
					return a.a.createElement(p.a, {
						commentId: e,
						commentsPageKey: "profileOverviewPageKey",
						showFlatlist: r,
						showModTools: n,
						isExpanded: !!s
					})
				};
			t.a = O(S)
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
		"./src/reddit/components/ProfileItemList/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/lodash/last.js"),
				s = n.n(r),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/opener/index.ts"),
				l = n("./src/reddit/constants/adEvents.ts"),
				d = n("./src/reddit/components/PostList/LoadMore.tsx"),
				m = n("./src/reddit/components/PostList/Placeholder.tsx"),
				u = n("./src/reddit/components/PostList/SomethingWrong.tsx"),
				p = n("./src/reddit/components/Scroller/Simple.tsx"),
				h = n("./src/reddit/constants/componentSizes.ts"),
				b = n("./src/reddit/helpers/getClickInfo.ts"),
				f = n("./src/reddit/helpers/isComment.ts"),
				w = n("./src/reddit/contexts/Post/index.tsx"),
				g = n("./src/lib/LRUCache/index.ts"),
				_ = n("./src/telemetry/index.ts"),
				y = n("./src/telemetry/models/Timer.ts"),
				x = n("./src/reddit/components/PostList/index.m.less"),
				k = n.n(x);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const v = 500,
				O = new g.a(v),
				S = new g.a(v),
				E = {
					LARGE: 1,
					MEDIUM: 1,
					CLASSIC: 3,
					COMPACT: 5
				},
				j = (e, t, n, r, s, o) => {
					const a = `entered-${e}-${t}-${n?`last-${r}-${s}`:""}`;
					let i = O.get(a);
					return void 0 === i && (i = () => {
						n && o.onBottomViewed(r, s), o.trackOnPostEnteredViewport(e, t)
					}, O.set(a, i)), i
				},
				P = (e, t) => {
					const n = `click-${e}`;
					let r = S.get(n);
					return void 0 === r && (r = (e, n) => {
						n.isSponsored && t.fireAdPixelsOfType(n, l.a.Click), n.isSponsored && n.source && n.source.outboundUrl ? Object(c.e)(n.source.outboundUrl, c.d.BLANK) : t.openPost({
							postOrComment: n,
							clickInfo: Object(b.a)(e)
						})
					}, S.set(n, r)), r
				};
			class L extends a.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new g.a(v), this.updateScrollerRef = e => {
						this.scrollerRef = e instanceof Element ? e : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}
				}
				UNSAFE_componentWillMount() {
					this.timerId && _.c.cancel(this.timerId), this.props.itemIds.length && (this.timerId = _.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.timerId) {
						const e = _.c.end(this.timerId);
						setTimeout(() => Object(_.b)(i.n.Redesign, {
							type: "mount",
							component: "overviewChronoList",
							duration: e
						}), 0)
					}
				}
				UNSAFE_componentWillUpdate(e) {
					this.timerId && _.c.cancel(this.timerId), e.itemIds.length && (this.timerId = _.c.start()), (e.listingKey !== this.props.listingKey || e.itemIds.length !== this.props.itemIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					if (this.checkAndSendScreenview(), this.timerId && _.c.has(this.timerId)) {
						const e = _.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(_.b)(i.n.Redesign, {
							duration: e,
							type: "mount",
							component: "overviewChronoList"
						}), 0)
					}
				}
				componentWillUnmount() {
					this.timerId && _.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
				}
				isListLongEnough() {
					const e = this.scrollerRef && Array.from(this.scrollerRef.children),
						t = e && s()(e);
					return t && t.getBoundingClientRect().bottom > window.innerHeight
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						listingKey: t,
						viewportDataLoaded: n
					} = this.props;
					return _.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (n || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: n
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const r = _.c.end(e);
					setTimeout(() => n(t(r, y.TimerType.InApp)), 0)
				}
				showPlaceholder() {
					const {
						apiError: e,
						apiPending: t
					} = this.props;
					return Boolean(e) || !1 !== t
				}
				hasPosts() {
					return this.props.itemIds.length > 0
				}
				isLoadingMore() {
					const {
						loadMore: e,
						itemIds: t
					} = this.props;
					return Boolean(e && e.token) && t.length > 0
				}
				shouldComponentUpdate(e) {
					const {
						itemIds: t,
						...n
					} = this.props, {
						itemIds: r,
						...s
					} = e, o = Object.keys(n), a = Object.keys(s);
					return a.length !== o.length || !!a.some(e => n[e] !== s[e])
				}
				scrollChildForItem(e, t, n, r, s, o) {
					const {
						listingKey: i,
						listingName: c,
						postClickEventFactory: l
					} = this.props, d = `post-${o}-${e}-${t}-${n?"last-index":""}-${c}-${i}`;
					let m;
					if (void 0 === (m = this.scrollChildCache.get(d))) {
						const {
							inSubredditOrProfile: t,
							itemIdToPostId: u
						} = this.props, p = u[e], h = `overview-chrono-list-item-[layout: ${o}]-[itemId: ${e}]`, b = j(p, o, n, i, c, this.props), f = {
							key: h,
							eventFactory: l,
							inSubredditOrProfile: t,
							isFirstInCommentList: r,
							isLastInCommentList: s,
							isOverlay: !1,
							itemId: e,
							last: n,
							layout: o,
							onClickPost: P(e, this.props),
							postId: p
						}, g = this.props.itemComponent;
						m = {
							estHeight: this.props.estimateItemHeight(e, o, r),
							id: e,
							isFocusable: !1,
							trackOnEnteredViewport: b,
							render: e => a.a.createElement(w.a, {
								postId: f.postId
							}, a.a.createElement(g, C({}, f, e)))
						}, this.scrollChildCache.set(d, m)
					}
					return m
				}
				render() {
					return this.hasPosts() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.showPlaceholder() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder()) : (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty())
				}
				renderEmpty() {
					const e = this.props.noPostsComponent;
					return a.a.createElement(e, null)
				}
				renderPlaceholder() {
					const {
						apiError: e,
						className: t,
						layout: n,
						onTryAgain: r
					} = this.props;
					return a.a.createElement("div", {
						className: k.a.placeholder
					}, a.a.createElement(m.a, {
						className: t,
						isLoading: !e,
						layout: n
					}), !!e && a.a.createElement(u.a, {
						apiError: e,
						onTryAgain: r
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						layout: n,
						onLoadMore: r
					} = this.props;
					return a.a.createElement("div", {
						className: k.a.placeholder
					}, a.a.createElement(d.a, {
						isLoading: !!t,
						layout: n,
						countOverride: E[n]
					}), !!e && a.a.createElement(u.a, {
						apiError: e,
						onTryAgain: r
					}))
				}
				renderList() {
					const {
						commentsById: e,
						layout: t,
						loadMore: n,
						itemIds: r,
						onLoadMore: s
					} = this.props, o = r.map((n, s, o) => {
						const a = s === r.length - 1,
							i = s && r[s - 1],
							c = !a && r[s + 1],
							l = !!Object(f.a)(n) && (!i || !Object(f.a)(i) || e[i].postId !== e[n].postId),
							d = !!Object(f.a)(n) && (!c || !Object(f.a)(c) || e[c].postId !== e[n].postId);
						return this.scrollChildForItem(n, s, a, l, d, t)
					});
					return a.a.createElement("div", null, a.a.createElement(p.b, {
						innerRef: this.updateScrollerRef,
						className: this.props.className,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						enableElementHiding: !0,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: n && n.token ? n.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: s,
						viewportTopPadding: h.f + h.s
					}, o), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			t.a = L
		},
		"./src/reddit/components/StateSort/index.m.less": function(e, t, n) {
			e.exports = {
				_Dropdown: "KZGTzwiGn_74p_B8yZaKw",
				dropdown: "KZGTzwiGn_74p_B8yZaKw",
				Component: "_3-D0oENu00AlV9AmpZqxfm",
				component: "_3-D0oENu00AlV9AmpZqxfm"
			}
		},
		"./src/reddit/components/SubredditSearchCarousel/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/selectors/experiments/joinOptimizations.ts");
			const c = Object(r.a)({
					resolved: {},
					chunkName: () => "SubredditSearchCarousel",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("SubredditSearchCarousel").then(n.bind(null, "./src/reddit/components/SubredditSearchCarousel/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/SubredditSearchCarousel/index.tsx"
					}
				}),
				l = e => {
					const t = Object(a.e)(i.e),
						n = Object(a.e)(i.a);
					return t || n ? o.a.createElement(c, e) : null
				}
		},
		"./src/reddit/components/TimeSort/index.m.less": function(e, t, n) {
			e.exports = {
				ListingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey",
				listingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey"
			}
		},
		"./src/reddit/components/Upsell/NsfwBlocking/index.m.less": function(e, t, n) {
			e.exports = {
				container: "g5yPbEIdjTE_wRlUoB82A",
				mainCta: "_2apx5_qKmY03WoZFb8YVu1",
				footerWrapper: "_1pjB5spDy43eUJW4x-wgvf",
				cancel: "Dkz3nRKFsS5yIm6e4o93l",
				logIn: "_2k4QV3liMMQG8PMmBZdd_g",
				cta: "_2GSkrIFkojWV3L0GzQPQ78",
				warning: "_3jyZ6ZfaXFxWYcy9cal-xq",
				contentTitle: "_3eTqEK57FN9xurcrP9z4",
				qrCodeOuter: "_2d-IWyIU0ITjihi9gW-H",
				qrCodeInner: "_2j_QTfhxnvmU-5PbhFmkfw",
				qrCode: "_2jh657b-F4yvqS49IkMjU8",
				sneakySnoo: "_3ybMuGXl2IGX8TdC6DdPZL",
				copyLine1: "_1SEuCrIhIH261lEivbj87_",
				copyLine2: "_2qkRHAALu7ZMIjqb5wD8uk"
			}
		},
		"./src/reddit/components/Upsell/NsfwBlocking/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return O
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-redux/es/index.js"),
				i = n("./src/config.ts"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/Footer/index.tsx"),
				d = n("./src/reddit/components/Upsell/NsfwBlocking/index.m.less"),
				m = n.n(d),
				u = n("./node_modules/fbt/lib/FbtPublic.js"),
				p = n("./src/reddit/actions/login.ts"),
				h = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/constants/experiments.ts"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				w = n("./src/reddit/selectors/telemetry.ts");
			const g = "nsfw_dialog";
			var _ = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts");
			const y = `${i.a.assetPath}/img/nsfw-blocking-promo/nsfw.png`,
				x = `${i.a.assetPath}/img/nsfw-blocking-promo/snoovatar_anonymous_cropped.png`,
				k = {
					d2x_nsfw_signup_blocking_de_v1: `${i.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`,
					d2x_nsfw_signup_blocking_non_us_v1: `${i.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`
				},
				C = e => {
					const t = Object(o.d)(),
						n = Object(h.b)();
					return s.a.createElement("div", {
						className: Object(c.a)(m.a.mainCta)
					}, s.a.createElement("img", {
						src: y
					}), s.a.createElement("div", {
						className: m.a.cta
					}, (() => u.fbt._("Log in to confirm you're over 18", null, {
						hk: "RUR2Z"
					}))()), s.a.createElement("div", {
						className: m.a.contentTitle
					}, e.contentTitle), s.a.createElement("div", {
						className: m.a.warning
					}, (() => u.fbt._("This page may contain sensitive or adult content that's not for everyone. To view it, confirm your age.", null, {
						hk: "3cUxXS"
					}))()), s.a.createElement("div", {
						className: m.a.buttonContainer
					}, s.a.createElement(f.j, {
						className: Object(c.a)(m.a.logIn),
						onClick: () => {
							n((() => e => ({
								...Object(w.o)(e),
								source: "xpromo",
								action: "click",
								noun: g
							}))()), t(Object(p.i)())
						}
					}, (() => u.fbt._("Log In", null, {
						hk: "4BITk"
					}))()), s.a.createElement(f.j, {
						className: m.a.cancel,
						onClick: () => {
							n((() => e => ({
								...Object(w.o)(e),
								source: "xpromo",
								action: "dismiss",
								noun: g
							}))()), t(Object(a.b)("/"))
						}
					}, (() => u.fbt._("I'm not over 18", null, {
						hk: "11UX9Q"
					}))())))
				},
				v = e => s.a.createElement("div", {
					className: m.a.qrCodeOuter
				}, s.a.createElement("div", {
					className: m.a.qrCodeInner
				}, s.a.createElement("img", {
					className: m.a.qrCode,
					src: e.qrCodeAsset
				}), s.a.createElement("div", {
					className: m.a.copyLine1
				}, (() => u.fbt._("Download the app to use", null, {
					hk: "4i9ZxV"
				}))()), s.a.createElement("div", {
					className: m.a.copyLine2
				}, (() => u.fbt._("Anonymous Browsing", null, {
					hk: "rTJ9j"
				}))()), s.a.createElement("img", {
					className: m.a.sneakySnoo,
					src: x
				}))),
				O = e => {
					const t = Object(h.b)();
					s.a.useEffect(() => {
						t((() => e => ({
							...Object(w.o)(e),
							source: "xpromo",
							action: "view",
							noun: g
						}))())
					}, [t]);
					const {
						contentTitle: n
					} = e, r = Object(o.e)(_.b) === b.gc.Enabled ? k.d2x_nsfw_signup_blocking_de_v1 : k.d2x_nsfw_signup_blocking_non_us_v1;
					return s.a.createElement("div", {
						className: m.a.container
					}, s.a.createElement(C, {
						contentTitle: n
					}), s.a.createElement("div", {
						className: m.a.footerWrapper
					}, s.a.createElement(l.a, null)), s.a.createElement(v, {
						qrCodeAsset: r
					}))
				}
		},
		"./src/reddit/constants/listingSorts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts");
			const o = {
					[s.W.BEST]: () => r.fbt._("Best", null, {
						hk: "dpKzI"
					}),
					[s.W.HOT]: () => r.fbt._("Hot", null, {
						hk: "Et75P"
					}),
					[s.W.NEW]: () => r.fbt._("New", null, {
						hk: "CDmNl"
					}),
					[s.W.CONTROVERSIAL]: () => r.fbt._("Controversial", null, {
						hk: "4dqPOJ"
					}),
					[s.W.RISING]: () => r.fbt._("Rising", null, {
						hk: "4gCzg6"
					}),
					[s.W.TOP]: () => r.fbt._("Top", null, {
						hk: "40Uy9p"
					}),
					[s.W.AWARDED]: () => r.fbt._("Awarded", null, {
						hk: "1B7nSa"
					})
				},
				a = e => {
					const t = o[e];
					return t && t() || ""
				},
				i = {
					[s.hc.HOUR]: () => r.fbt._("Now", null, {
						hk: "ZmhY"
					}),
					[s.hc.DAY]: () => r.fbt._("Today", null, {
						hk: "40Ugu1"
					}),
					[s.hc.WEEK]: () => r.fbt._("This Week", null, {
						hk: "14tmoK"
					}),
					[s.hc.MONTH]: () => r.fbt._("This Month", null, {
						hk: "34dbM3"
					}),
					[s.hc.YEAR]: () => r.fbt._("This Year", null, {
						hk: "14RJsa"
					}),
					[s.hc.ALL]: () => r.fbt._("All Time", null, {
						hk: "3qt6Ct"
					})
				},
				c = e => {
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
		"./src/reddit/icons/svgs/Dropdown/index.m.less": function(e, t, n) {
			e.exports = {
				dropdown: "XHbKeEqnW58ib9mTN6jnS",
				mRedditStyle: "u_kypUXmB-k1A5TcC8MI9"
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				i = n.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const l = e => {
				let {
					className: t,
					isSubreddit: n,
					...r
				} = e;
				return s.a.createElement("svg", c({
					className: Object(o.a)(i.a.dropdown, {
						[i.a.mRedditStyle]: !n
					}, t),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, r), s.a.createElement("path", {
					d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
				}))
			};
			t.b = l
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
				return l
			})), n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/pages/ErrorPages/index.m.less"),
				c = n.n(i);
			const l = e => {
					let {
						message: t
					} = e;
					return o.a.createElement("div", {
						className: c.a.container
					}, o.a.createElement("h3", {
						className: c.a.title
					}, t || r.fbt._("Sorry, there doesn't seem to be anything here.", null, {
						hk: "3VvHek"
					})), o.a.createElement(a.n, {
						className: c.a.primaryRouterLink,
						to: "/"
					}, r.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})))
				},
				d = e => {
					let {
						message: t
					} = e;
					return o.a.createElement("div", {
						className: c.a.container
					}, o.a.createElement("h3", {
						className: c.a.title
					}, t || r.fbt._("Sorry, You do not have permission to view this page.", null, {
						hk: "4lRbHD"
					})), o.a.createElement(a.n, {
						className: c.a.primaryRouterLink,
						to: "/"
					}, r.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})))
				}
		},
		"./src/reddit/pages/ProfileComments/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/lodash/fromPairs.js"),
				s = n.n(r),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/constants/index.ts"),
				d = n("./src/lib/extractQueryParams/index.ts"),
				m = n("./src/lib/makeListingKey/index.ts"),
				u = n("./src/reddit/actions/pages/profileComments/index.ts"),
				p = n("./src/reddit/actions/pages/profileShared.ts"),
				h = n("./src/reddit/components/ContentGate/index.tsx"),
				b = n("./src/reddit/components/EmptyProfile/index.ts"),
				f = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				w = n("./src/reddit/components/JumpToContent/index.tsx"),
				g = n("./src/lib/classNames/index.ts"),
				_ = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				y = n("./src/lib/lessComponent.tsx"),
				x = n("./src/reddit/components/ClassicPost/index.tsx"),
				k = n("./src/reddit/components/OverviewChronoList/ListItem.tsx"),
				C = n("./src/reddit/components/OverviewCommentPost/index.tsx"),
				v = n("./src/reddit/components/OverviewConversationsPost/Border/index.tsx"),
				O = n("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx"),
				S = n("./src/reddit/constants/postLayout.ts"),
				E = n("./src/reddit/contexts/PageLayer/index.tsx"),
				j = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				P = n("./src/reddit/selectors/commentSelector.ts"),
				L = n("./src/reddit/components/ProfileCommentList/ListItem.m.less"),
				N = n.n(L);

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const T = y.a.wrapped(x.default, "ClassicPost", N.a),
				D = y.a.wrapped(C.a, "OverviewCommentPost", N.a),
				A = Object(E.u)({
					currentProfileName: E.i,
					pageLayer: e => e
				}),
				R = Object(c.c)({
					comment: (e, t) => {
						let {
							itemId: n
						} = t;
						return Object(P.b)(e, {
							commentId: n
						})
					},
					profileName: (e, t) => {
						let {
							currentProfileName: n
						} = t;
						if (n) return ((e, t) => {
							const {
								users: n
							} = e, r = t.toLowerCase(), s = n.models[r];
							return s ? s.username : void 0
						})(e, n)
					}
				});
			var B = A(Object(i.b)(R)(e => {
				const {
					comment: t,
					itemId: n,
					isFirstInCommentList: r,
					isLastInCommentList: s,
					layout: o,
					profileName: i,
					allowModToolsUnderComments: c
				} = e;
				if (o === S.g.Compact) return a.a.createElement(k.a, e);
				const {
					height: l,
					width: d,
					...m
				} = e;
				return a.a.createElement(F, m, r && a.a.createElement(v.a, {
					isFirst: !0
				}, o === S.g.Large ? a.a.createElement(T, I({}, e, {
					availableWidth: d,
					inSubredditOrProfile: !1,
					isOverlay: !1
				})) : a.a.createElement(D, I({}, e, {
					commentId: n,
					profileName: i
				}))), a.a.createElement(v.a, {
					isLast: s
				}, a.a.createElement(O.a, {
					commentId: n,
					depth: t.parentId ? 1 : 0,
					isFirst: !0,
					isLast: !0,
					key: n,
					profileName: i,
					showModTools: c
				})))
			}));
			const F = Object(_.a)(e => a.a.createElement("div", {
				className: Object(g.a)(N.a.backgroundMargin, {
					[N.a.isFirstInCommentList]: e.isFirstInCommentList,
					[N.a.isLastInCommentList]: e.isLastInCommentList
				}),
				style: {
					background: Object(j.e)(e)
				}
			}, e.children));
			var W = n("./src/reddit/components/ProfileItemList/index.tsx"),
				U = n("./node_modules/lodash/noop.js"),
				M = n.n(U),
				H = n("./src/reddit/actions/ads/index.ts"),
				q = n("./src/reddit/actions/comment/list.ts"),
				G = n("./src/reddit/actions/post.ts"),
				K = n("./src/reddit/components/TrackingHelper/index.tsx"),
				z = n("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				V = n("./src/reddit/helpers/trackers/post.ts"),
				Z = n("./src/reddit/featureFlags/index.ts"),
				Y = n("./src/reddit/selectors/comments.ts"),
				J = n("./src/reddit/selectors/posts.ts"),
				X = n("./src/reddit/selectors/profileComments.ts"),
				Q = n("./src/reddit/selectors/subreddit.ts"),
				$ = n("./src/reddit/selectors/tracking.ts"),
				ee = n("./src/reddit/selectors/user.ts");
			const te = Object(E.u)(),
				ne = {
					apiError: X.a,
					apiPending: X.b,
					currentUser: ee.k,
					measureScrollFPS: Z.d.measureScrollFPS,
					layout: E.R,
					loadMore: X.d,
					subredditsById: Q.Z,
					viewportDataLoaded: $.a,
					commentsById: Y.q,
					itemIds: X.f,
					itemIdToPostId: X.e,
					postsById: J.J,
					estimateItemHeight: e => (e, t, n) => {
						if (n) switch (t) {
							case S.g.Medium:
								return 174;
							case S.g.Classic:
								return 129;
							case S.g.Compact:
								return 120;
							default:
								return 140
						}
						switch (t) {
							case S.g.Medium:
							case S.g.Classic:
								return 90;
							case S.g.Compact:
								return 80;
							default:
								return 90
						}
					}
				},
				re = Object(c.c)(ne),
				se = Object(i.b)(re, e => ({
					onBottomViewed: (t, n) => e(Object(q.c)(t, n)),
					adBrandSafetyStatusReceived: t => {
						e(H.d({
							isViewSafe: t
						}))
					},
					openPost: t => e(Object(G.L)(t)),
					fireAdPixelsOfType: M.a,
					trackOnPostEnteredViewport: M.a
				}), (e, t, n) => ({
					...e,
					...t,
					...n,
					postClickEventFactory: (e, t) => Object(V.h)(e, t),
					postComponentForLayout: z.b
				}));

			function oe() {
				return (oe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const ae = e => a.a.createElement(B, oe({}, e, {
					allowModToolsUnderComments: !0
				})),
				ie = (e => Object(K.c)(te(se(e))))(W.a);
			var ce = e => a.a.createElement(ie, oe({}, e, {
					itemComponent: ae
				})),
				le = n("./src/reddit/components/ProfileNavMenu/index.tsx"),
				de = n("./src/reddit/components/ProfileSidebar/index.tsx"),
				me = n("./src/reddit/components/Upsell/NsfwBlocking/index.tsx"),
				ue = n("./src/reddit/helpers/name/index.ts"),
				pe = n("./src/reddit/helpers/trackers/screenview.ts"),
				he = n("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				be = n("./src/reddit/layout/page/Listing/index.tsx"),
				fe = n("./src/reddit/models/ContentGate.ts"),
				we = n("./src/reddit/pages/ErrorPages/index.tsx"),
				ge = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				_e = n("./src/reddit/selectors/profile.ts");

			function ye() {
				return (ye = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const xe = Object(E.u)(),
				ke = Object(c.a)(E.E, ee.jb, (e, t) => {
					let {
						location: n
					} = t;
					return s()([...Object(d.a)(n.search)])
				}, E.R, (e, t) => {
					let {
						match: n
					} = t;
					return n.params.profileName
				}, (e, t) => {
					let {
						match: n
					} = t;
					return Object(_e.j)(e, {
						profileName: n.params.profileName
					})
				}, ee.P, (e, t) => {
					let {
						match: n
					} = t;
					return Object(ee.f)(e, l.jc + n.params.profileName)
				}, ge.a, (e, t, n, r, s, o, a, i, c) => {
					const {
						sort: l,
						t: d
					} = Object(p.b)(n), u = Object(m.a)(`u_${s}`, l, n);
					return {
						contentGateInfo: i,
						over18Prefs: t,
						isLoggedIn: a,
						isOwnProfile: e,
						isProfileNSFW: !!o && o.isNSFW,
						layout: r,
						listingKey: u,
						profileName: s,
						sort: l,
						timeSort: d,
						isEligibleForNsfwSignupUpsellTreatment: c
					}
				}),
				Ce = Object(i.b)(ke, (e, t) => ({
					onLoadMore: () => e(Object(u.moreItemsRequested)()),
					onLayoutChange: () => e(Object(u.profileCommentsRequested)({
						...t.match,
						queryParams: s()([...Object(d.a)(t.location.search)])
					}))
				}));
			t.default = xe(Ce(Object(he.d)(e => {
				const {
					contentGateInfo: t,
					over18Prefs: n,
					isOwnProfile: r,
					isProfileNSFW: s,
					listingKey: o,
					onLoadMore: i,
					onLayoutChange: c,
					pageLayer: d,
					profileName: m,
					sort: u,
					timeSort: p,
					isEligibleForNsfwSignupUpsellTreatment: g
				} = e;
				if (!m || !d) return null;
				if (t && t.profileDeleted) return a.a.createElement(h.default, {
					contentGateType: fe.a.ProfileDeleted,
					profileName: m
				});
				if (t && t.profileSuspended) return a.a.createElement(h.default, {
					contentGateType: fe.a.ProfileSuspended,
					profileName: m
				});
				if (451 === d.status || t && t.profileBlockedForLegalReason) return a.a.createElement(h.default, {
					contentGateType: fe.a.ProfileBlockedForLegalReason,
					profileName: m
				});
				if (403 === d.status) return a.a.createElement(we.a, null);
				if (404 === d.status) return a.a.createElement(h.default, {
					contentGateType: fe.a.ProfileDoesNotExist,
					profileName: m
				});
				const _ = m.toLowerCase(),
					y = `/user/${m}/comments/`,
					x = {
						listingKey: o,
						listingName: _
					};
				if (s && !r && g) return a.a.createElement(me.a, {
					contentTitle: Object(ue.d)(m)
				});
				if (!n && s && !r) return a.a.createElement(h.default, {
					contentGateType: fe.a.Nsfw,
					subredditName: m
				});
				const k = {
					sort: u,
					baseUrl: y,
					sortOptions: l.Db,
					timeSort: p
				};
				return a.a.createElement(be.a, {
					className: e.className,
					fitPageToContent: !0,
					contentNavBar: a.a.createElement(a.a.Fragment, null, a.a.createElement(le.a, {
						profileName: m
					})),
					content: a.a.createElement(a.a.Fragment, null, a.a.createElement(f.a, k), a.a.createElement(w.a, null), a.a.createElement(ce, {
						listingKey: o,
						listingName: _,
						listingViewed: (e, t) => Object(pe.o)(o, u, t, e, p),
						noPostsComponent: () => a.a.createElement(b.b, {
							profileName: m,
							timeSort: p
						}),
						onLoadMore: i,
						onTryAgain: c,
						inSubredditOrProfile: !1
					})),
					sidebar: a.a.createElement(de.a, ye({}, x, {
						profileName: m
					}))
				})
			})))
		},
		"./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/meta.ts"),
				i = n("./src/reddit/selectors/experiments/index.ts");
			const c = Object(r.a)(a.g, a.d, i.e, (e, t, n) => !e && !t && !n);

			function l(e, t) {
				return n => Object(o.c)(n, {
					experimentName: e,
					experimentEligibilitySelector: c,
					expEventOverride: t
				})
			}
			const d = l(s.Mb, !0),
				m = l(s.Mb, !1),
				u = l(s.Nb, !0),
				p = (l(s.Nb, !1), Object(r.a)(d, u, (e, t) => e === s.gc.Enabled || t === s.hc.Enabled))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileComments.4b00545a09f43d247b35.js.map