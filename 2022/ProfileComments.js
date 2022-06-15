// https://www.redditstatic.com/desktop2x/ProfileComments.86909d9bc4f7bad7a607.js
// Retrieved at 6/15/2022, 1:10:04 PM by Reddit Dataminer v1.0.0
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
				l = n.n(i);
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
						[l.a.disable]: n,
						[l.a.active]: r,
						[l.a.hover]: !!a
					}),
					viewBox: e.viewBox,
					style: t,
					onClick: e.onClick
				}, e.children)
			}, "Component", l.a)
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
				return B
			})), n.d(t, "profileCommentsLoaded", (function() {
				return D
			})), n.d(t, "profileCommentsFailed", (function() {
				return R
			})), n.d(t, "profileCommentsRequested", (function() {
				return F
			})), n.d(t, "moreItemsPending", (function() {
				return W
			})), n.d(t, "moreItemsLoaded", (function() {
				return A
			})), n.d(t, "moreItemsFailed", (function() {
				return M
			})), n.d(t, "moreItemsRequested", (function() {
				return U
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/lodash/difference.js"),
				s = n.n(r),
				o = n("./node_modules/lodash/pick.js"),
				a = n.n(o),
				i = n("./src/lib/makeActionCreator/index.ts"),
				l = n("./src/lib/makeListingKey/index.ts"),
				c = n("./src/reddit/actions/contentGate.ts"),
				d = n("./src/reddit/actions/externalAccount.ts"),
				m = n("./src/reddit/actions/moderatingSubreddits.ts"),
				u = n("./src/reddit/actions/pages/profileShared.ts"),
				p = n("./src/reddit/actions/platform.ts"),
				h = n("./src/reddit/actions/profile/index.ts"),
				b = n("./src/reddit/actions/subreddit.ts"),
				f = n("./src/reddit/constants/errors.ts"),
				w = n("./src/reddit/constants/parameters.ts"),
				g = n("./src/reddit/contexts/PageLayer/index.tsx"),
				C = n("./src/config.ts"),
				_ = n("./src/lib/addAllowQuarantinedParam/index.ts"),
				k = n("./src/lib/constants/index.ts"),
				y = n("./src/lib/makeApiRequest/index.ts"),
				v = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				x = n("./src/reddit/models/Comment/addProfileImgParam.ts"),
				O = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				S = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const E = (e, t, n, r) => {
				let s = Object(v.a)(Object(_.a)(Object(O.a)(Object(S.a)(`${C.a.gatewayUrl}/desktopapi/v1/user/${t}/comments`))));
				return r && (s = Object(x.a)(s)), Object(y.a)(e, {
					data: n,
					endpoint: s,
					method: k.jb.GET
				})
			};
			var j = n("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				P = n("./src/reddit/helpers/timeApiRoute/index.ts"),
				N = n("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				L = n("./src/reddit/selectors/profile.ts"),
				I = n("./src/reddit/selectors/profileComments.ts"),
				T = n("./src/reddit/actions/pages/profileComments/constants.ts");
			const B = Object(i.a)(T.f),
				D = Object(i.a)(T.e),
				R = Object(i.a)(T.d),
				F = e => async (t, n, r) => {
					const {
						queryParams: s,
						params: o
					} = e, {
						sort: i,
						t: g
					} = Object(u.b)(s), {
						profileName: C
					} = o, _ = Object(l.a)(`u_${C}`, i, e.queryParams), {
						profileCommentsPage: k
					} = n(), y = k.commentIds[_], v = k.api.error[_], x = k.api.pending[_];
					if (await t(h.d(C)), x || y && !v) {
						if (y) {
							const e = Object(L.q)(n(), {
								profileName: C
							});
							t(p.m({
								title: e
							}))
						}
						return
					}
					const O = {
						...a()(e.queryParams, [...w.l, w.h]),
						sort: i,
						t: Object(j.a)(i, g)
					};
					t(B({
						key: _
					}));
					const S = await Object(P.a)("profileComments", () => E(r.apiContext(), C, O, Object(N.a)(n())));
					if (!S.ok) return t(R({
						account: S.body.data ? S.body.data.account : null,
						error: S.body.reason ? {
							type: S.body.reason
						} : S.error,
						key: _
					})), S.body.reason === f.a.DeletedProfile && t(Object(c.s)({
						profileName: C
					})), void t(p.n(S.status));
					const I = S.body;
					t(D({
						key: _,
						meta: n().meta,
						...I
					})), await Promise.all([t(Object(u.c)(C)), t(Object(b.q)()), t(Object(m.b)()), t(d.o(C))])
				}, W = Object(i.a)(T.c), A = Object(i.a)(T.b), M = Object(i.a)(T.a), U = () => async (e, t, n) => {
					let {
						apiContext: r
					} = n;
					const o = t(),
						{
							currentPage: i
						} = o.platform;
					if (!i || !i.routeMatch) return;
					const {
						queryParams: c,
						params: d
					} = i.routeMatch.match, {
						sort: m,
						t: p
					} = Object(u.b)(c), {
						profileName: h
					} = d, b = Object(l.a)(`u_${h}`, m, c), f = Object(I.d)(o, {
						listingKey: b
					});
					if (!f) return;
					const C = Object(I.b)(o, {
							listingKey: b
						}),
						_ = Object(I.c)(o, {
							listingKey: b
						}),
						k = _ && _[f.token];
					if (C || k) return;
					e(W({
						key: b,
						fetchedToken: f.token
					}));
					const y = await E(r(), h, {
						after: f.token,
						dist: f.dist,
						sort: m,
						t: p,
						...a()(c, w.l),
						layout: Object(g.S)(o, {}).toLowerCase()
					}, Object(N.a)(o));
					if (y.ok) {
						const t = Object(I.f)(o, {
								listingKey: b
							}),
							n = {
								...y.body,
								commentIds: s()(y.body.commentIds, t)
							};
						e(A({
							fetchedToken: f.token,
							key: b,
							meta: o.meta,
							...n
						}))
					} else e(M({
						account: y.body.data ? y.body.data.account : null,
						error: y.error,
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
				l = n("./src/reddit/contexts/NavbarExp.ts"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/lessComponent.tsx"),
				m = n("./src/lib/loginHref/index.ts"),
				u = n("./src/reddit/actions/contentGate.ts"),
				p = n("./src/reddit/actions/preferences.ts"),
				h = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx"),
				b = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				f = n("./src/reddit/components/Footer/index.tsx"),
				w = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				g = n("./src/reddit/components/RichTextJson/index.tsx"),
				C = n("./src/reddit/components/SubredditSearchCarousel/async.tsx"),
				_ = n("./src/reddit/components/TextWithLinks/index.tsx"),
				k = n("./src/reddit/constants/parameters.ts"),
				y = n("./src/reddit/contexts/PageLayer/index.tsx"),
				v = n("./src/reddit/controls/Button/index.tsx"),
				x = n("./src/chat/controls/Svg/index.tsx");

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var S = e => o.a.createElement(x.a, O({}, e, {
					viewBox: "-1 -1 21 21"
				}), o.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				E = n("./src/reddit/models/ContentGate.ts"),
				j = n("./src/lib/constants/index.ts"),
				P = n("./src/reddit/selectors/platform.ts"),
				N = n("./src/reddit/selectors/user.ts");
			var L = n("./src/reddit/selectors/meta.ts"),
				I = n("./src/reddit/components/ContentGate/index.m.less"),
				T = n.n(I);
			const {
				fbt: B
			} = n("./node_modules/fbt/lib/FbtPublic.js"), D = d.a.wrapped(S, "PrivateKey", T.a), R = d.a.div("ButtonsContainer", T.a), F = d.a.div("Container", T.a), W = d.a.div("ContainerExp", T.a), A = d.a.div("Description", T.a), M = d.a.div("PrivateSubredditDetails", T.a), U = d.a.div("PrivateSubredditDescription", T.a), H = d.a.h3("PrivateSubredditName", T.a), q = d.a.a("Link", T.a), z = d.a.wrapped(v.n, "LinkRouterButton", T.a), G = d.a.wrapped(v.m, "LinkButton", T.a), K = d.a.wrapped(v.q, "SecondaryLinkRouterButton", T.a), V = d.a.wrapped(v.p, "SecondaryLinkButton", T.a), Z = d.a.wrapped(z, "GoHomeLinkButton", T.a), Y = d.a.wrapped(b.a, "CreateCommunityButton", T.a), J = d.a.img("Image", T.a), Q = d.a.img("ImagePlaceholder", T.a), X = d.a.wrapped(z, "LeftLinkRouterButton", T.a), $ = d.a.wrapped(G, "LeftLinkButton", T.a), ee = d.a.wrapped(V, "SecondaryLeftLinkButton", T.a), te = d.a.wrapped(K, "SecondaryLeftLinkRouterButton", T.a), ne = d.a.h3("Title", T.a), re = d.a.div("PageBody", T.a), se = d.a.div("InterstitialMessageWrapper", T.a), oe = Object(c.c)({
				isLoggedIn: N.P,
				origin: L.j,
				user: N.k,
				isPrivateSubredditContributorRequestPending: e => (e => {
					if (!Object(N.Q)(e)) return !1;
					const t = Object(P.d)(e);
					if (!t) return !1;
					const n = Object(N.f)(e, t);
					if (!n) return !1;
					if (!n.privateSubreddit) return !1;
					const {
						isContributorRequestTimestamp: r
					} = n;
					if (!r) return !1;
					const s = 30 * j.B;
					return r > Date.now() - s
				})(e),
				isSeo: L.g
			}), ae = Object(y.u)(), ie = Object(a.b)(oe, (e, t) => {
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
			}), le = e => {
				const {
					banMessage: t,
					contentGateType: n,
					continueToQuarantinedSubreddit: s,
					continueToGatedSubreddit: a,
					isLoggedIn: i,
					isContributorRequestsDisabled: l,
					isPrivateSubredditContributorRequestPending: c,
					isSeo: d,
					location: p,
					origin: b,
					pageLayer: f,
					quarantineRequiresEmail: y,
					quarantineMessage: v,
					quarantineMessageHtml: x,
					quarantineMessageRTJson: O,
					interstitialWarningMessage: S,
					interstitialWarningMessageHtml: j,
					interstitialWarningMessageRTJson: P,
					setNSFWPreference: N,
					subredditDescription: L,
					subredditName: I,
					user: F
				} = e, W = async () => {
					if (i ? await N() : await Object(u.n)(), d) {
						const e = new URL(window.location.href);
						e.searchParams.set(k.g, "1"), window.location.href = e.href
					} else window.location.reload()
				};
				switch (n) {
					case E.a.GoldSubreddit:
						return o.a.createElement("div", null, o.a.createElement(J, {
							src: `${r.a.assetPath}/img/gold/premium-crest.png`
						}), o.a.createElement(ne, null, B._("r/{community name} is a Reddit Premium community", [B._param("community name", I)], {
							hk: "2lyDwB"
						})), o.a.createElement(A, null, B._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), o.a.createElement(R, null, F ? o.a.createElement(ee, {
							href: `${r.a.redditUrl}/premium`,
							redditStyle: !0
						}, B._("Get Premium", null, {
							hk: "3ChWi4"
						})) : o.a.createElement($, {
							href: Object(m.a)(p, b),
							redditStyle: !0
						}, B._("Sign Up", null, {
							hk: "rvpjy"
						})), F ? o.a.createElement(z, {
							to: "/",
							redditStyle: !0
						}, B._("Go Home", null, {
							hk: "49p4or"
						})) : o.a.createElement(V, {
							href: Object(m.a)(p, b),
							redditStyle: !0
						}, B._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case E.a.Nsfw:
					case E.a.NsfwCustomFeed:
						return o.a.createElement("div", null, o.a.createElement(J, {
							src: `${r.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), o.a.createElement(ne, null, n === E.a.Nsfw ? B._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : B._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), o.a.createElement(A, null, B._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), o.a.createElement(R, null, o.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, B._("No", null, {
							hk: "3fMglW"
						})), o.a.createElement(V, {
							onClick: W,
							redditStyle: !0
						}, B._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case E.a.PrivateSubreddit:
						return o.a.createElement("div", null, o.a.createElement(D, null), o.a.createElement(ne, null, "r/", I, " ", B._("is a private community", null, {
							hk: "7zZmq"
						})), L && L.length && o.a.createElement(M, null, o.a.createElement(H, null, "r/", I), o.a.createElement(U, null, o.a.createElement("div", null, L))), o.a.createElement(A, null, B._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", I, " ", B._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), o.a.createElement("br", null), B._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), o.a.createElement(R, null, F ? o.a.createElement(o.a.Fragment, null, !l && o.a.createElement(h.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: T.a.ContributorRequestButton,
							isContributorRequestPending: c
						}), o.a.createElement(ee, {
							href: `${r.a.redditUrl}/message/compose?to=/r/${I}`,
							redditStyle: !0
						}, B._("Message Mods", null, {
							hk: "vVe1i"
						}))) : o.a.createElement(ee, {
							href: Object(m.a)(p, b),
							redditStyle: !0
						}, B._("Sign Up", null, {
							hk: "rvpjy"
						})), o.a.createElement(z, {
							to: "/",
							redditStyle: !0
						}, B._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))), I && o.a.createElement(C.a, {
							subredditName: I
						}));
					case E.a.QuarantinedSubreddit:
						return o.a.createElement("div", null, o.a.createElement(J, {
							src: `${r.a.assetPath}/img/content-gate-icons/quarantined.png`
						}), o.a.createElement(ne, null, B._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), o.a.createElement(A, null, B._("This community is {=quarantined}", [B._param("=quarantined", o.a.createElement(q, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, B._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), o.a.createElement(se, null, O ? o.a.createElement(g.b, {
							content: O,
							rtJsonElementProps: {
								pageLayer: f
							}
						}) : x ? o.a.createElement(w.a, {
							html: x
						}) : v || B._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), B._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), o.a.createElement(R, null, ((e, t, n) => {
							return !(e && e.hasVerifiedEmail) && n ? o.a.createElement(R, null, o.a.createElement(te, {
								to: "/",
								redditStyle: !0
							}, B._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(G, {
								href: `${r.a.redditUrl}/prefs/update`,
								redditStyle: !0
							}, B._("Verify Email", null, {
								hk: "1893cq"
							}))) : o.a.createElement(R, null, o.a.createElement(X, {
								to: "/",
								redditStyle: !0
							}, B._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(V, {
								onClick: t,
								redditStyle: !0
							}, B._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(F, s, y)));
					case E.a.GatedSubreddit:
						return o.a.createElement("div", null, o.a.createElement(ne, null, B._("Are you sure you want to view this community?", null, {
							hk: "1K5UIm"
						})), o.a.createElement(A, null, o.a.createElement(se, null, P ? o.a.createElement(g.b, {
							content: P,
							rtJsonElementProps: {
								pageLayer: f
							}
						}) : j ? o.a.createElement(w.a, {
							html: j
						}) : S), B._("Are you certain you want to continue?", null, {
							hk: "3pT969"
						})), o.a.createElement(R, null, o.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, B._("No Thank You", null, {
							hk: "4B26AR"
						})), o.a.createElement(V, {
							onClick: a,
							redditStyle: !0
						}, B._("Continue", null, {
							hk: "2rLyAk"
						}))));
					case E.a.SubredditBanned:
						return o.a.createElement("div", null, o.a.createElement(J, {
							src: `${r.a.assetPath}/img/content-gate-icons/banned.png`
						}), o.a.createElement(ne, null, B._("r/{community name} has been banned from Reddit", [B._param("community name", I)], {
							hk: "2at9Se"
						})), (e => o.a.createElement(A, null, e ? o.a.createElement(_.a, {
							linkClassName: T.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : B._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), o.a.createElement(R, null, o.a.createElement(z, {
							to: "/",
							redditStyle: !0
						}, B._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case E.a.SubredditBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(J, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ne, null, B._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), o.a.createElement(R, null, o.a.createElement(z, {
							to: "/",
							redditStyle: !0
						}, B._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case E.a.SubredditDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(Q, null), o.a.createElement(ne, null, B._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), o.a.createElement(A, null, B._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), o.a.createElement(R, null, F && o.a.createElement(Y, {
							eventSource: "content_gate"
						}), o.a.createElement(Z, {
							to: "/",
							redditStyle: !0
						}, B._("Go Home", null, {
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
									return B._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case E.a.ProfileDeleted:
									return B._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case E.a.ProfileSuspended:
									return o.a.createElement(o.a.Fragment, null, B._("This account has been {=suspended} .", [B._param("=suspended", o.a.createElement(q, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, B._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case E.a.ProfileDoesNotExist:
									return o.a.createElement(o.a.Fragment, null, o.a.createElement(ne, null, B._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), o.a.createElement(A, null, B._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), o.a.createElement(R, null, o.a.createElement(Z, {
							to: "/",
							redditStyle: !0
						}, B._("Go Home", null, {
							hk: "49p4or"
						}))));
					case E.a.CustomFeedDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(J, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ne, null, B._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), o.a.createElement(R, null, o.a.createElement(Z, {
							to: "/",
							redditStyle: !0
						}, B._("Go Home", null, {
							hk: "49p4or"
						}))));
					case E.a.PostBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(J, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ne, null, B._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), o.a.createElement(R, null, o.a.createElement(z, {
							to: "/",
							redditStyle: !0
						}, B._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = ae(ie(Object(i.i)(e => {
				const t = Object(s.useContext)(l.a) ? W : F;
				return o.a.createElement(t, null, o.a.createElement("div", {
					"data-testid": "content-gate"
				}, o.a.createElement(re, null, le(e))), o.a.createElement(f.b, null))
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
				l = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/actions/tooltip.ts"),
				d = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/constants/modals.ts"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				b = n("./src/reddit/selectors/user.ts"),
				f = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				w = n.n(f),
				g = n("./src/lib/lessComponent.tsx");
			const C = "create-community-button",
				_ = g.a.wrapped(d.c, "StyledTooltip", w.a),
				k = Object(i.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(b.pb)(e),
					userIsSuspended: b.X
				});
			t.a = Object(a.b)(k, (e, t) => {
				let {
					eventSource: n
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(h.c)(n)), e(Object(l.h)(u.a.SUBREDDIT_CREATION_MODAL_ID))
					},
					onShowTooltip: () => e(Object(c.f)({
						tooltipId: C
					})),
					onHideTooltip: () => e(Object(c.i)())
				}
			})(Object(m.c)(e => {
				let {
					className: t,
					eventSource: n,
					onShowTooltip: s,
					onHideTooltip: a,
					openCommunityCreation: i,
					sendEvent: l,
					userDoesNotHaveEnoughExpToCreateCommunity: c,
					userIsSuspended: d,
					onClick: m
				} = e;
				return o.a.createElement(p.t, {
					className: t,
					disabled: d || c,
					onClick: e => {
						m && m(e), i(l)
					},
					onMouseEnter: s,
					onMouseLeave: a,
					priority: p.c.Secondary,
					id: C,
					isFullWidth: !0
				}, r.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), c ? o.a.createElement(_, {
					caretOnTop: !0,
					tooltipId: C,
					text: r.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : d ? o.a.createElement(_, {
					caretOnTop: !0,
					tooltipId: C,
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
				mIsWhite: "_3TyrvwTfHlJHEevBoOKkDJ",
				PrivacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				privacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				UserAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				userAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				UserAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh",
				userAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh",
				mIsGrey: "_2g4mHpbVF30jxvk8ZPbqBe"
			}
		},
		"./src/reddit/components/Footer/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/config.ts"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/Footer/index.m.less"),
				c = n.n(l);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js"), m = i.a.div("UserAgreement", c.a), u = i.a.a("UserAgreementLink", c.a), p = i.a.a("PrivacyLink", c.a);
			var h;
			! function(e) {
				e.Grey = "grey", e.White = "white"
			}(h || (h = {}));
			t.b = e => s.a.createElement("div", {
				className: Object(a.a)(c.a.FooterContainer, {
					[c.a.mIsGrey]: e.textColor === h.Grey,
					[c.a.mIsWhite]: e.textColor === h.White
				})
			}, s.a.createElement(m, null, d._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy.} ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [d._param("=User Agreement", s.a.createElement(u, {
				href: `${o.a.redditUrl}/help/useragreement`
			}, d._("User Agreement", null, {
				hk: "YviZP"
			}))), d._param("=Privacy Policy.", s.a.createElement(p, {
				href: `${o.a.redditUrl}/help/privacypolicy`
			}, d._("Privacy Policy.", null, {
				hk: "1fsgYq"
			}))), d._param("year", (new Date).getFullYear())], {
				hk: "3wzgp7"
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
				l = n("./src/higherOrderComponents/asTooltip.tsx"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = n("./src/reddit/actions/preferences.ts"),
				u = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				h = n("./src/reddit/constants/postLayout.ts"),
				b = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/contexts/Tooltip.ts"),
				w = n("./src/reddit/controls/Dropdown/index.tsx"),
				g = n("./src/reddit/controls/Dropdown/Row.tsx"),
				C = n("./src/reddit/icons/fonts/index.tsx"),
				_ = n("./src/reddit/selectors/telemetry.ts"),
				k = n("./src/reddit/selectors/tooltip.ts"),
				y = n("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				v = n.n(y);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const O = "view--layout--FUE",
				S = "LayoutSwitch--picker",
				E = Object(l.a)(w.a),
				j = {
					[h.d.Card]: function(e) {
						return o.a.createElement(C.a, x({}, e, {
							name: "view_card"
						}))
					},
					[h.d.Classic]: function(e) {
						return o.a.createElement(C.a, x({}, e, {
							name: "view_classic"
						}))
					},
					[h.d.Compact]: function(e) {
						return o.a.createElement(C.a, x({}, e, {
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
				N = Object(b.u)(),
				L = Object(i.c)({
					dropdownIsOpen: Object(k.b)(S),
					postLayout: b.S,
					redditStyle: b.D
				}),
				I = Object(a.b)(L, e => ({
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
							screen: Object(_.Y)(t),
							subreddit: Object(_.gb)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: n,
							onLayoutClick: r,
							postLayout: s
						} = this.props, a = n || h.e[s], i = e === a, l = j[e], d = P[e];
						return o.a.createElement(g.b, x({}, t, {
							className: Object(c.a)(v.a.LayoutItem, {
								[v.a.selected]: i,
								[v.a.DropdownButton]: null == t ? void 0 : t.showDropdownTriangle
							}),
							"data-layout": e,
							displayText: d(),
							iconWrapperClassName: v.a.LayoutItemIconWrapper,
							isSelected: i,
							noHover: i,
							onClick: i ? void 0 : () => this.changeLayout(e),
							textClassName: v.a.LayoutItemTextClassName
						}), o.a.createElement(l, {
							className: v.a.LayoutIcon,
							onClick: i ? void 0 : r,
							isFilled: i && (!t || !1 !== t.forceIconFill)
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return o.a.createElement(E, x({}, e, {
							className: v.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: v.a.DropdownRow,
							rowIconClassName: v.a.DropdownRowIcon,
							rowSelectedClassName: v.a.DropdownRowSelected,
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
						className: Object(c.a)(v.a.Container, e),
						id: O
					}, o.a.createElement("div", {
						className: v.a.DropdownContainer,
						onClick: n
					}, this.renderItem(s, {
						id: S,
						showDropdownTriangle: !0,
						forceIconFill: !1
					}), o.a.createElement(f.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = N(I(Object(p.c)(Object(d.a)(T))))
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
				l = n("./src/reddit/actions/preferences.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/helpers/isListingFocused/index.tsx"),
				u = n("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				p = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/lib/addQueryParams/index.ts")),
				h = n("./src/lib/constants/index.ts"),
				b = n("./node_modules/react-router-redux/es/index.js"),
				f = n("./node_modules/reselect/es/index.js"),
				w = n("./src/reddit/actions/tooltip.ts"),
				g = n("./node_modules/fbt/lib/FbtPublic.js"),
				C = n("./src/higherOrderComponents/asTooltip.tsx"),
				_ = n("./src/reddit/constants/history.ts"),
				k = n("./src/reddit/constants/listingSorts.ts"),
				y = n("./src/reddit/contexts/Tooltip.ts"),
				v = n("./src/reddit/controls/Dropdown/index.tsx"),
				x = n("./src/reddit/controls/Dropdown/Row.tsx"),
				O = n("./src/reddit/helpers/path/index.ts"),
				S = n("./src/reddit/helpers/trackers/navigation.ts"),
				E = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				j = n("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				P = n("./src/reddit/selectors/experiments/econLeaderboards.ts"),
				N = n("./src/reddit/selectors/tooltip.ts"),
				L = n("./src/reddit/selectors/user.ts"),
				I = n("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				T = n("./src/reddit/components/ListingSort/index.m.less"),
				B = n.n(T),
				D = n("./src/lib/lessComponent.tsx");

			function R() {
				return (R = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const F = "ListingSort--SortPicker",
				W = Object(C.a)(D.a.wrapped(v.a, "Dropdown", B.a)),
				A = D.a.wrapped(I.a, "ListingSortIcon", B.a),
				M = (D.a.wrapped(E.b, "DropdownTriangle", B.a), D.a.div("Title", B.a)),
				U = D.a.wrapped(e => s.a.createElement(x.b, R({}, e, {
					noHover: !0,
					isSelected: !1
				})), "Row", B.a),
				H = e => {
					let {
						disabled: t,
						...n
					} = e;
					return s.a.createElement("div", R({}, n, {
						className: Object(a.a)(B.a.SortWrapper, n.className, {
							[B.a.isDisabled]: t
						})
					}))
				},
				q = D.a.div("DropdownRowDisabled", B.a),
				z = Object(d.u)({
					isFrontpage: d.A,
					isProfilePage: d.J,
					pageLayer: e => e
				}),
				G = Object(f.c)({
					isAwardListingExperimentEnabled: P.a,
					isBestSortPopularEnabled: j.a,
					user: L.k,
					dropdownIsOpen: (e, t) => Object(N.b)(t.dropdownId || F)(e),
					isPopularPage: d.F
				}),
				K = Object(o.b)(G, (e, t) => {
					let {
						dropdownId: n,
						pageLayer: r
					} = t;
					return {
						onOpenDropdown: () => e(Object(w.h)({
							tooltipId: n || F
						}))
					}
				});
			var V = D.a.wrapped(z(K(Object(c.c)(e => s.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, !1 !== e.showTitle && s.a.createElement(M, null, g.fbt._("Sort", null, {
					hk: "2BfINq"
				})), s.a.createElement(H, {
					disabled: e.disabled
				}, e.children || s.a.createElement(U, {
					className: e.buttonClassName,
					displayText: Object(k.a)(e.sort),
					id: e.dropdownId || F,
					showDropdownTriangle: !0
				}, s.a.createElement(A, {
					sort: e.sort
				}))), s.a.createElement(y.a.Consumer, null, t => s.a.createElement(W, R({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: e.dropdownId || F
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
					return s.a.createElement(x.b, {
						className: Object(a.a)(e.rowClassName, e.sort === t ? e.rowSelectedClassName : void 0),
						displayText: Object(k.a)(t),
						onClick: () => {
							e.onChange(t), e.sendEvent(Object(S.b)(t))
						},
						href: {
							pathname: r,
							state: {
								[_.b.FeedLoadReason]: _.a.SortChange
							},
							search: o
						},
						isSelected: e.sort === t,
						key: t
					}, s.a.createElement(A, {
						className: e.rowIconClassName,
						sort: t
					}))
				}))))))), "ListingSort", B.a),
				Z = n("./src/reddit/constants/parameters.ts");
			const Y = e => {
					const t = J[e];
					return t && t() || ""
				},
				J = {
					[h.fc.AllStates]: () => g.fbt._("All", null, {
						hk: "3FfdRL"
					}),
					[h.fc.Alaska]: () => g.fbt._("alaska", null, {
						hk: "3PQz70"
					}),
					[h.fc.Alabama]: () => g.fbt._("alabama", null, {
						hk: "1Ain9C"
					}),
					[h.fc.Arkansas]: () => g.fbt._("arkansas", null, {
						hk: "3MSLfs"
					}),
					[h.fc.Arizona]: () => g.fbt._("arizona", null, {
						hk: "PjKyy"
					}),
					[h.fc.California]: () => g.fbt._("california", null, {
						hk: "4fS2Uy"
					}),
					[h.fc.Colorado]: () => g.fbt._("colorado", null, {
						hk: "2FU5sm"
					}),
					[h.fc.Connecticut]: () => g.fbt._("connecticut", null, {
						hk: "3HJ97l"
					}),
					[h.fc.DistrictOfColumbia]: () => g.fbt._("district of columbia", null, {
						hk: "43sboQ"
					}),
					[h.fc.Delaware]: () => g.fbt._("delaware", null, {
						hk: "1sMYnC"
					}),
					[h.fc.Florida]: () => g.fbt._("florida", null, {
						hk: "1ahnDc"
					}),
					[h.fc.Georgia]: () => g.fbt._("georgia", null, {
						hk: "3O8sgW"
					}),
					[h.fc.Hawaii]: () => g.fbt._("hawaii", null, {
						hk: "11be3k"
					}),
					[h.fc.Iowa]: () => g.fbt._("iowa", null, {
						hk: "15vW0A"
					}),
					[h.fc.Idaho]: () => g.fbt._("idaho", null, {
						hk: "12whY2"
					}),
					[h.fc.Illinois]: () => g.fbt._("illinois", null, {
						hk: "4F6qqr"
					}),
					[h.fc.Indiana]: () => g.fbt._("indiana", null, {
						hk: "1Xvs3I"
					}),
					[h.fc.Kansas]: () => g.fbt._("kansas", null, {
						hk: "4yvtHS"
					}),
					[h.fc.Kentucky]: () => g.fbt._("kentucky", null, {
						hk: "3iqD7X"
					}),
					[h.fc.Louisiana]: () => g.fbt._("louisiana", null, {
						hk: "1pM17K"
					}),
					[h.fc.Massachusetts]: () => g.fbt._("massachusetts", null, {
						hk: "3Hx5EP"
					}),
					[h.fc.Maryland]: () => g.fbt._("maryland", null, {
						hk: "62JHL"
					}),
					[h.fc.Maine]: () => g.fbt._("maine", null, {
						hk: "2Sh6yp"
					}),
					[h.fc.Michigan]: () => g.fbt._("michigan", null, {
						hk: "2fnY28"
					}),
					[h.fc.Minnesota]: () => g.fbt._("minnesota", null, {
						hk: "4diMsG"
					}),
					[h.fc.Missouri]: () => g.fbt._("missouri", null, {
						hk: "3QuF4u"
					}),
					[h.fc.Mississippi]: () => g.fbt._("mississippi", null, {
						hk: "28v1kQ"
					}),
					[h.fc.Montana]: () => g.fbt._("montana", null, {
						hk: "20sZYn"
					}),
					[h.fc.NorthCarolina]: () => g.fbt._("north carolina", null, {
						hk: "BUaf7"
					}),
					[h.fc.NorthDakota]: () => g.fbt._("north dakota", null, {
						hk: "1WRpz0"
					}),
					[h.fc.Nebraska]: () => g.fbt._("nebraska", null, {
						hk: "XUJCr"
					}),
					[h.fc.NewHampshire]: () => g.fbt._("new hampshire", null, {
						hk: "ga6kK"
					}),
					[h.fc.NewJersey]: () => g.fbt._("new jersey", null, {
						hk: "3Sz9QN"
					}),
					[h.fc.NewMexico]: () => g.fbt._("new mexico", null, {
						hk: "i2870"
					}),
					[h.fc.Nevada]: () => g.fbt._("nevada", null, {
						hk: "2DsBxU"
					}),
					[h.fc.NewYork]: () => g.fbt._("new york", null, {
						hk: "2wKULo"
					}),
					[h.fc.Ohio]: () => g.fbt._("ohio", null, {
						hk: "1KDnKA"
					}),
					[h.fc.Oklahoma]: () => g.fbt._("oklahoma", null, {
						hk: "2P0Ita"
					}),
					[h.fc.Oregon]: () => g.fbt._("oregon", null, {
						hk: "3CqdY4"
					}),
					[h.fc.Pennsylvania]: () => g.fbt._("pennsylvania", null, {
						hk: "2skMK"
					}),
					[h.fc.RhodeIsland]: () => g.fbt._("rhode island", null, {
						hk: "120MAU"
					}),
					[h.fc.SouthCarolina]: () => g.fbt._("south carolina", null, {
						hk: "3JyeG9"
					}),
					[h.fc.SouthDakota]: () => g.fbt._("south dakota", null, {
						hk: "4to42L"
					}),
					[h.fc.Tennessee]: () => g.fbt._("tennessee", null, {
						hk: "gHo1c"
					}),
					[h.fc.Texas]: () => g.fbt._("texas", null, {
						hk: "3dgz4M"
					}),
					[h.fc.Utah]: () => g.fbt._("utah", null, {
						hk: "22zf2i"
					}),
					[h.fc.Virginia]: () => g.fbt._("virginia", null, {
						hk: "1dvXBl"
					}),
					[h.fc.Vermont]: () => g.fbt._("vermont", null, {
						hk: "1Cdmbu"
					}),
					[h.fc.Washington]: () => g.fbt._("washington", null, {
						hk: "hhztG"
					}),
					[h.fc.Wisconsin]: () => g.fbt._("wisconsin", null, {
						hk: "3SOyMZ"
					}),
					[h.fc.WestVirginia]: () => g.fbt._("west virginia", null, {
						hk: "1jIKYD"
					}),
					[h.fc.Wyoming]: () => g.fbt._("wyoming", null, {
						hk: "1QaJzt"
					})
				};
			var Q = n("./src/reddit/components/StateSort/index.m.less"),
				X = n.n(Q);

			function $() {
				return ($ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const ee = D.a.wrapped(v.a, "_Dropdown", X.a),
				te = Object(C.a)(ee),
				ne = e => {
					return e.indexOf("_") > 0 && se(e) === h.z.UnitedStates
				},
				re = e => {
					if (ne(e)) {
						return e.split("_")[1]
					}
					return h.fc.AllStates
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
					dropdownIsOpen: Object(N.b)("StateSort--StateSortPicker")
				}),
				le = Object(o.b)(ie, e => ({
					onOpenDropdown: () => e(Object(w.h)({
						tooltipId: "StateSort--StateSortPicker"
					})),
					onClickLink: (t, n) => {
						e(Object(b.b)(t)), e(Object(l.w)(h.z.UnitedStates + "_" + n))
					}
				}));
			var ce = D.a.wrapped(ae(le(e => {
				const t = `${e.baseUrl}?${Z.h}=${h.z.UnitedStates}`;
				return s.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, s.a.createElement(H, {
					className: e.wrapperClassName,
					disabled: e.disabled
				}, s.a.createElement(U, {
					className: e.buttonClassName,
					displayText: e.showStateAbbreviations && e.sort ? e.sort : Y(e.sort),
					id: "StateSort--StateSortPicker",
					showDropdownTriangle: !0
				})), s.a.createElement(y.a.Consumer, null, n => s.a.createElement(te, $({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "StateSort--StateSortPicker"
				}, n, {
					renderContentsHidden: !0
				}), Object.keys(h.fc).map(n => {
					const r = h.fc[n];
					return s.a.createElement("div", {
						onClick: () => e.onClickLink((e => e === h.fc.AllStates ? t : `${t}_${e}`)(r), oe(r))
					}, s.a.createElement(x.b, {
						className: Object(a.a)(e.rowClassName, e.sort === r ? e.rowSelectedClassName : void 0),
						displayText: Y(r),
						isSelected: e.sort === r
					}))
				}))))
			})), "Component", X.a);
			const de = {
				[h.z.Everywhere]: () => g.fbt._("Everywhere", null, {
					hk: "3ysAHX"
				}),
				[h.z.UnitedStates]: () => g.fbt._("United States", null, {
					hk: "qrsat"
				}),
				[h.z.Argentina]: () => g.fbt._("Argentina", null, {
					hk: "1tWd87"
				}),
				[h.z.Australia]: () => g.fbt._("Australia", null, {
					hk: "2c0yTh"
				}),
				[h.z.Bulgaria]: () => g.fbt._("Bulgaria", null, {
					hk: "2mbkzD"
				}),
				[h.z.Canada]: () => g.fbt._("Canada", null, {
					hk: "1bnYIf"
				}),
				[h.z.Chile]: () => g.fbt._("Chile", null, {
					hk: "2eNYaZ"
				}),
				[h.z.Colombia]: () => g.fbt._("Colombia", null, {
					hk: "2sw6kC"
				}),
				[h.z.Croatia]: () => g.fbt._("Croatia", null, {
					hk: "4vRKYu"
				}),
				[h.z.CzechRepublic]: () => g.fbt._("Czech Republic", null, {
					hk: "21xzwE"
				}),
				[h.z.Finland]: () => g.fbt._("Finland", null, {
					hk: "jmDeD"
				}),
				[h.z.France]: () => g.fbt._("France", null, {
					hk: "1fX2Y8"
				}),
				[h.z.Germany]: () => g.fbt._("Germany", null, {
					hk: "2mADuB"
				}),
				[h.z.Greece]: () => g.fbt._("Greece", null, {
					hk: "UUFTD"
				}),
				[h.z.Hungary]: () => g.fbt._("Hungary", null, {
					hk: "4tz4jk"
				}),
				[h.z.Iceland]: () => g.fbt._("Iceland", null, {
					hk: "4mwr9S"
				}),
				[h.z.India]: () => g.fbt._("India", null, {
					hk: "omZ5C"
				}),
				[h.z.Ireland]: () => g.fbt._("Ireland", null, {
					hk: "3rG4DM"
				}),
				[h.z.Italy]: () => g.fbt._("Italy", null, {
					hk: "3EvGjk"
				}),
				[h.z.Japan]: () => g.fbt._("Japan", null, {
					hk: "3EAE8v"
				}),
				[h.z.Malaysia]: () => g.fbt._("Malaysia", null, {
					hk: "MgsVM"
				}),
				[h.z.Mexico]: () => g.fbt._("Mexico", null, {
					hk: "4ibMpW"
				}),
				[h.z.NewZealand]: () => g.fbt._("New Zealand", null, {
					hk: "3LwpKe"
				}),
				[h.z.Philippines]: () => g.fbt._("Philippines", null, {
					hk: "jokzr"
				}),
				[h.z.Poland]: () => g.fbt._("Poland", null, {
					hk: "2v19X3"
				}),
				[h.z.Portugal]: () => g.fbt._("Portugal", null, {
					hk: "2HNYp5"
				}),
				[h.z.PuertoRico]: () => g.fbt._("Puerto Rico", null, {
					hk: "22QgWG"
				}),
				[h.z.Romania]: () => g.fbt._("Romania", null, {
					hk: "5HuLT"
				}),
				[h.z.Serbia]: () => g.fbt._("Serbia", null, {
					hk: "3ly2Z0"
				}),
				[h.z.Singapore]: () => g.fbt._("Singapore", null, {
					hk: "3qEBqp"
				}),
				[h.z.Spain]: () => g.fbt._("Spain", null, {
					hk: "44RpFE"
				}),
				[h.z.Sweden]: () => g.fbt._("Sweden", null, {
					hk: "A5nWO"
				}),
				[h.z.Taiwan]: () => g.fbt._("Taiwan", null, {
					hk: "IHujb"
				}),
				[h.z.Thailand]: () => g.fbt._("Thailand", null, {
					hk: "1c8zJr"
				}),
				[h.z.Turkey]: () => g.fbt._("Turkey", null, {
					hk: "11Xk7x"
				}),
				[h.z.UnitedKingdom]: () => g.fbt._("United Kingdom", null, {
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
					dropdownIsOpen: Object(N.b)(he)
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
							[_.b.FeedLoadReason]: _.a.GeoModeChange
						})), e(Object(l.w)(n))
					}
				}))(e => {
					const t = se(e.sort),
						n = re(e.sort),
						r = `${e.baseUrl}?${Z.h}=`;
					return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
						className: Object(a.a)(ue.a.countrySort, e.className),
						onClick: () => e.dropdownIsOpen ? e.onCloseDropdown(he) : e.onOpenDropdown(he)
					}, s.a.createElement(H, {
						className: e.wrapperClassName,
						disabled: e.disabled
					}, s.a.createElement(U, {
						className: e.buttonClassName,
						displayText: (() => t in de ? de[t]() : de[h.z.Everywhere]())(),
						id: he,
						showDropdownTriangle: !0
					})), s.a.createElement(y.a.Consumer, null, n => s.a.createElement(te, pe({
						className: e.dropdownClassName,
						isOpen: e.dropdownIsOpen,
						tooltipId: he
					}, n, {
						renderContentsHidden: !0
					}), Object.keys(h.z).map(n => {
						const o = h.z[n];
						return s.a.createElement("div", {
							key: o,
							onClick: () => e.onClickLink(`${r}${oe(o)}`, o)
						}, s.a.createElement(x.b, {
							className: Object(a.a)(e.rowClassName, t === o ? e.rowSelectedClassName : void 0),
							displayText: de[o](),
							isSelected: t === o
						}))
					})))), t === h.z.UnitedStates && s.a.createElement(ce, {
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
				Ce = n.n(ge),
				_e = n("./src/reddit/components/TimeSort/index.m.less"),
				ke = n.n(_e);

			function ye() {
				return (ye = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const ve = Object(C.a)(v.a),
				xe = D.a.div("ListingSortContainer", ke.a),
				Oe = Object(d.u)(),
				Se = Object(f.c)({
					dropdownIsOpen: Object(N.b)("TimeSort--SortPicker")
				});
			var Ee = Oe(Object(o.b)(Se, e => ({
					onOpenDropdown: () => e(Object(w.h)({
						tooltipId: "TimeSort--SortPicker"
					}))
				}))(Object(c.c)(e => s.a.createElement(xe, {
					className: e.className,
					onClick: e.onOpenDropdown
				}, s.a.createElement(H, {
					className: e.wrapperClassName,
					disabled: !1
				}, s.a.createElement(U, {
					className: e.buttonClassName,
					displayText: Object(k.b)(e.timeSort),
					id: "TimeSort--SortPicker",
					showDropdownTriangle: !0
				})), s.a.createElement(y.a.Consumer, null, t => s.a.createElement(ve, ye({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "TimeSort--SortPicker"
				}, t), [h.ic.HOUR, h.ic.DAY, h.ic.WEEK, h.ic.MONTH, h.ic.YEAR, h.ic.ALL].map(t => {
					const n = ((e, t) => {
							let n = e.url;
							return e.urlParams.sort || Object(d.J)(e) || (n = Ce.a.join(n, t)), n
						})(e.pageLayer, e.listingSort),
						r = Object(p.a)(n, {
							[Z.C]: t
						}),
						o = r.split("?")[0],
						i = `${r.replace(o+"?","")}`;
					return s.a.createElement(x.b, {
						className: Object(a.a)(e.rowClassName, e.timeSort === t ? e.rowSelectedClassName : void 0),
						key: `time_sort_${t}`,
						displayText: Object(k.b)(t),
						href: {
							pathname: o,
							state: {
								[_.b.FeedLoadReason]: _.a.SortChange
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
				Ne = n("./src/reddit/icons/fonts/index.tsx"),
				Le = n("./src/reddit/selectors/meta.ts"),
				Ie = n("./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less"),
				Te = n.n(Ie);

			function Be() {
				return (Be = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const De = new Set([h.W.CONTROVERSIAL, h.W.TOP]),
				Re = new Set([h.W.CONTROVERSIAL, h.W.RISING]),
				Fe = new Set([h.W.CONTROVERSIAL]),
				We = "ListingSort--Overflow",
				Ae = Object(d.u)({
					isFrontpage: d.A,
					isProfilePage: d.J,
					pageLayer: e => e
				}),
				Me = Object(f.a)((e, t) => t.sortOptions, (e, t) => t.isFrontpage, j.a, L.k, d.F, P.a, Le.i, (e, t, n, r, s, o, a) => {
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
			class Ue extends s.a.Component {
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
						}) : Object(O.a)(n, `${e}/`), i = o.split("?")[0], l = r ? o.replace(i + "?", "") : void 0;
						return s.a.createElement(Pe.t, {
							className: Object(a.a)(Te.a.SortLink, e === t && Te.a.selected),
							kind: Pe.b.InternalLink,
							priority: Pe.c.Plain,
							Icon: n => s.a.createElement(A, Be({}, n, {
								className: Object(a.a)(Te.a.SortIcon, n.className),
								sort: e,
								isFilled: e === t
							})),
							text: Object(k.a)(e),
							onClick: () => this.changeSort(e),
							to: {
								pathname: i,
								state: {
									[_.b.FeedLoadReason]: _.a.SortChange
								},
								search: l
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
					return Fe.has(t) && n.has(e)
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
					} = this.props, l = !t && De.has(r), c = Re.has(r), d = o.filter(e => !this.isOverflowSort(e)), m = o.filter(e => this.isOverflowSort(e) && e !== r);
					return s.a.createElement(s.a.Fragment, null, s.a.createElement(V, Be({}, this.props, {
						buttonClassName: Te.a.DropdownButton,
						className: Object(a.a)(Te.a.SortDropdown, e),
						rowClassName: Te.a.DropdownRow,
						rowIconClassName: Te.a.DropdownRowIcon,
						rowSelectedClassName: Te.a.DropdownRowSelected,
						showTitle: !1
					})), s.a.createElement("div", {
						className: Object(a.a)(Te.a.SortButtons, e)
					}, d.map(this.renderSort)), c && this.renderSort(r), l && s.a.createElement(Ee, {
						buttonClassName: Te.a.DropdownButton,
						className: Te.a.TimeSort,
						dropdownClassName: Te.a.Dropdown,
						listingSort: r,
						onChange: n,
						rowClassName: Te.a.DropdownRow,
						rowSelectedClassName: Te.a.DropdownRowSelected,
						timeSort: i || h.jc,
						wrapperClassName: Te.a.DropdownSortWrapper
					}), m.length > 0 && s.a.createElement(V, Be({}, this.props, {
						className: Object(a.a)(Te.a.SortOverflow, e),
						dropdownClassName: Te.a.Dropdown,
						dropdownId: We,
						rowClassName: Te.a.DropdownRow,
						rowIconClassName: Te.a.DropdownRowIcon,
						rowSelectedClassName: Te.a.DropdownRowSelected,
						showTitle: !1,
						sortOptions: m
					}), s.a.createElement("button", {
						className: Te.a.SortOverflowButton,
						id: We
					}, s.a.createElement(Ne.a, {
						name: "overflow_horizontal"
					}))))
				}
			}
			var He = Ae(Object(o.b)(Me)(Object(c.c)(Ue))),
				qe = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less"),
				ze = n.n(qe);
			const Ge = Object(d.u)({
					isProfilePage: d.J,
					pageLayer: e => e
				}),
				Ke = Object(o.b)(null, (e, t) => {
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
								e(Object(l.J)(n, s))
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
						sortOptions: l,
						subredditId: c,
						timeSort: d,
						updateSortPreference: m
					} = this.props;
					return s.a.createElement("div", {
						className: Object(a.a)(ze.a.Container, t),
						onBlur: this.blurListingBroadcast,
						onFocus: this.focusListingBroadcast
					}, s.a.createElement(He, {
						baseUrl: e,
						disabled: r,
						geopopularSort: n,
						onChange: m,
						onTimeSortChange: this.updateTimeSort,
						sort: i,
						sortOptions: l,
						timeSort: d
					}), !o && s.a.createElement(u.a, {
						className: ze.a.LayoutSwitch,
						subredditId: c
					}))
				}
			}
			t.a = Ge(Ke(Object(c.c)(Ve)))
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
				l = n("./src/reddit/controls/Dropdown/index.m.less"),
				c = n.n(l);
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
					className: Object(o.a)(t, c.a.iconStyles)
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
				l = n("./src/reddit/constants/gold.ts"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/components/CommentContainer/index.tsx"),
				p = n("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				h = n("./src/reddit/helpers/getClickInfo.ts"),
				b = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				f = n("./src/reddit/selectors/commentSelector.ts"),
				w = n("./src/reddit/selectors/communityAwards.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				C = n("./src/reddit/components/OverviewChronoComment/index.m.less"),
				_ = n.n(C);
			const k = Object(a.b)(() => Object(i.c)({
				comment: f.b,
				isAwarded: (e, t) => {
					const n = Object(f.b)(e, t);
					return !(!n || !n.awardCountsById) && Object.keys(n.awardCountsById).some(t => {
						const n = Object(w.a)(e, t);
						return n && n.coinPrice >= l.g
					})
				},
				isNightmodeOn: g.db
			}), e => ({
				openPost: t => e(Object(m.L)(t))
			}));
			var y = Object(d.a)(k(e => {
					const {
						comment: t,
						commentId: n,
						first: r,
						isAwarded: o,
						isNightmodeOn: a,
						last: i,
						openPost: l,
						showModTools: d
					} = e;
					if (!t) return null;
					return s.a.createElement(u.a, {
						comment: t,
						onClick: (e, t) => {
							l({
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
						className: Object(c.a)(_.a.commentOuterWrapper, {
							[_.a.isLast]: i,
							[_.a.isAwarded]: o,
							[_.a.isNightmodeOn]: a
						})
					}, s.a.createElement("div", {
						className: Object(c.a)(_.a.commentWrapper, {
							[_.a.isFirst]: r
						})
					}, s.a.createElement("div", {
						className: _.a.commentSeparator
					}), t.parentId && s.a.createElement("div", {
						className: _.a.commentSeparator
					}), s.a.createElement("div", {
						className: _.a.commentContentWrapper
					}, s.a.createElement(p.a, {
						commentId: n,
						commentsPageKey: "profileOverviewPageKey",
						showFlatlist: !0,
						showModTools: d,
						isExpanded: !0
					})))))
				})),
				v = n("./src/reddit/components/OverviewCommentPost/index.tsx"),
				x = n("./src/reddit/contexts/PageLayer/index.tsx"),
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
			const N = Object(x.u)({
					currentProfileName: x.i,
					isCommentsPage: x.x,
					isCommentPermalink: x.w,
					isProfilePostListing: x.L,
					pageLayer: e => e
				}),
				L = j.a.wrapped(v.a, "OverviewCommentPost", E.a),
				I = j.a.wrapped(o.default, "ClassicPost", E.a);
			t.a = N(e => {
				const {
					itemId: t,
					isFirstInCommentList: n,
					isLastInCommentList: r,
					allowModToolsUnderComments: o,
					height: a,
					width: i,
					...l
				} = e;
				return Object(O.a)(t) ? n ? s.a.createElement(s.a.Fragment, null, s.a.createElement(L, P({}, l, {
					availableWidth: i,
					commentId: t
				})), s.a.createElement(y, {
					commentId: t,
					first: n,
					last: r,
					showModTools: o
				})) : s.a.createElement(y, {
					commentId: t,
					first: n,
					last: r,
					showModTools: o
				}) : s.a.createElement(I, P({}, l, {
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

			function l() {
				return (l = Object.assign || function(e) {
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
				return s.a.createElement("div", l({
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
				l = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/constants/gold.ts"),
				d = n("./src/lib/classNames/index.ts"),
				m = n("./src/lib/lessComponent.tsx"),
				u = n("./src/reddit/components/CommentContainer/index.tsx"),
				p = n("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				h = n("./src/reddit/actions/post.ts"),
				b = n("./src/reddit/helpers/getClickInfo.ts"),
				f = n("./src/reddit/selectors/commentSelector.ts"),
				w = n("./src/reddit/selectors/communityAwards.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				C = n("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.m.less"),
				_ = n.n(C);
			const k = m.a.div("ProfileOwnerCommentWrapper", _.a),
				y = m.a.div("CommentContentWrapper", _.a),
				v = m.a.div("Wrapper", _.a),
				x = m.a.div("CommentSeparator", _.a),
				O = Object(i.b)(() => Object(l.c)({
					comment: (e, t) => Object(f.b)(e, t),
					isAwarded: (e, t) => {
						const n = Object(f.b)(e, t);
						return !(!n || !n.awardCountsById) && Object.keys(n.awardCountsById).some(t => {
							const n = Object(w.a)(e, t);
							return n && n.coinPrice >= c.g
						})
					},
					isNightmodeOn: g.db
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
						isLast: l,
						isNightmodeOn: c,
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
					}, a.a.createElement(v, {
						className: Object(d.a)({
							[_.a.isFirst]: i,
							[_.a.isLast]: l,
							[_.a.isAwarded]: o,
							[_.a.isNightmodeOn]: c
						})
					}, s()(n + 1, e => a.a.createElement(x, {
						key: e
					})), a.a.createElement(y, null, h(t, m, p))))
				}
			}
			const E = (e, t, n) => a.a.createElement(k, null, j(e, t, n, !0, !0)),
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
				l = n("./src/lib/opener/index.ts"),
				c = n("./src/reddit/constants/adEvents.ts"),
				d = n("./src/reddit/components/PostList/LoadMore.tsx"),
				m = n("./src/reddit/components/PostList/Placeholder.tsx"),
				u = n("./src/reddit/components/PostList/SomethingWrong.tsx"),
				p = n("./src/reddit/components/Scroller/Simple.tsx"),
				h = n("./src/reddit/constants/componentSizes.ts"),
				b = n("./src/reddit/helpers/getClickInfo.ts"),
				f = n("./src/reddit/helpers/isComment.ts"),
				w = n("./src/reddit/contexts/Post/index.tsx"),
				g = n("./src/lib/LRUCache/index.ts"),
				C = n("./src/telemetry/index.ts"),
				_ = n("./src/telemetry/models/Timer.ts"),
				k = n("./src/reddit/components/PostList/index.m.less"),
				y = n.n(k);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const x = 500,
				O = new g.a(x),
				S = new g.a(x),
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
						n.isSponsored && t.fireAdPixelsOfType(n, c.a.Click), n.isSponsored && n.source && n.source.outboundUrl ? Object(l.e)(n.source.outboundUrl, l.d.BLANK) : t.openPost({
							postOrComment: n,
							clickInfo: Object(b.a)(e)
						})
					}, S.set(n, r)), r
				};
			class N extends a.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new g.a(x), this.updateScrollerRef = e => {
						this.scrollerRef = e instanceof Element ? e : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}
				}
				UNSAFE_componentWillMount() {
					this.timerId && C.c.cancel(this.timerId), this.props.itemIds.length && (this.timerId = C.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.timerId) {
						const e = C.c.end(this.timerId);
						setTimeout(() => Object(C.b)(i.m.Redesign, {
							type: "mount",
							component: "overviewChronoList",
							duration: e
						}), 0)
					}
				}
				UNSAFE_componentWillUpdate(e) {
					this.timerId && C.c.cancel(this.timerId), e.itemIds.length && (this.timerId = C.c.start()), (e.listingKey !== this.props.listingKey || e.itemIds.length !== this.props.itemIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					if (this.checkAndSendScreenview(), this.timerId && C.c.has(this.timerId)) {
						const e = C.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(C.b)(i.m.Redesign, {
							duration: e,
							type: "mount",
							component: "overviewChronoList"
						}), 0)
					}
				}
				componentWillUnmount() {
					this.timerId && C.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
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
					return C.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (n || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: n
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const r = C.c.end(e);
					setTimeout(() => n(t(r, _.TimerType.InApp)), 0)
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
						listingName: l,
						postClickEventFactory: c
					} = this.props, d = `post-${o}-${e}-${t}-${n?"last-index":""}-${l}-${i}`;
					let m;
					if (void 0 === (m = this.scrollChildCache.get(d))) {
						const {
							inSubredditOrProfile: t,
							itemIdToPostId: u
						} = this.props, p = u[e], h = `overview-chrono-list-item-[layout: ${o}]-[itemId: ${e}]`, b = j(p, o, n, i, l, this.props), f = {
							key: h,
							eventFactory: c,
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
							}, a.a.createElement(g, v({}, f, e)))
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
						className: y.a.placeholder
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
						className: y.a.placeholder
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
							l = !a && r[s + 1],
							c = !!Object(f.a)(n) && (!i || !Object(f.a)(i) || e[i].postId !== e[n].postId),
							d = !!Object(f.a)(n) && (!l || !Object(f.a)(l) || e[l].postId !== e[n].postId);
						return this.scrollChildForItem(n, s, a, c, d, t)
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
						viewportTopPadding: h.f + h.r
					}, o), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			t.a = N
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
				return c
			}));
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/selectors/experiments/joinOptimizations.ts");
			const l = Object(r.a)({
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
				c = e => {
					const t = Object(a.e)(i.e),
						n = Object(a.e)(i.a);
					return t || n ? o.a.createElement(l, e) : null
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
				overlay: "_2Gv5G082cUjYdQRyoGXyAo",
				modal: "_1_2jhTQc4DA7TtWS6g9BMN",
				cta: "_2GSkrIFkojWV3L0GzQPQ78",
				container: "g5yPbEIdjTE_wRlUoB82A",
				mainCta: "_2apx5_qKmY03WoZFb8YVu1",
				contentTitle: "_3eTqEK57FN9xurcrP9z4",
				warning: "_3jyZ6ZfaXFxWYcy9cal-xq",
				cancel: "Dkz3nRKFsS5yIm6e4o93l",
				logIn: "_2k4QV3liMMQG8PMmBZdd_g",
				footerWrapper: "_1pjB5spDy43eUJW4x-wgvf",
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
				return j
			}));
			var r = n("./src/config.ts"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/react-router-redux/es/index.js"),
				c = n("./src/higherOrderComponents/asModal/helpers.ts"),
				d = n("./src/lib/classNames/index.ts"),
				m = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = n("./src/reddit/actions/login.ts"),
				p = n("./src/reddit/actions/modal.ts"),
				h = n("./src/reddit/components/Footer/index.tsx"),
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				f = n("./src/reddit/constants/experiments.ts"),
				w = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/reddit/helpers/counters/nsfwblocking.ts"),
				C = n("./src/reddit/selectors/telemetry.ts");
			const _ = "nsfw_dialog";
			var k = e => a.a.createElement("svg", {
					className: e.className,
					fill: "none",
					height: "60",
					viewBox: "0 0 60 60",
					xmlns: "http://www.w3.org/2000/svg",
					width: "60"
				}, a.a.createElement("path", {
					d: "M34.87 27.6302C35.4007 27.9589 36.0158 28.1257 36.64 28.1102C37.2902 28.1403 37.9354 27.9841 38.5 27.6602C38.9989 27.4003 39.4148 27.0052 39.7 26.5202C40.004 26.0401 40.1654 25.4835 40.1654 24.9152C40.1654 24.3469 40.004 23.7903 39.7 23.3102C39.4148 22.8252 38.9989 22.4302 38.5 22.1702C37.9681 21.8768 37.3671 21.7318 36.76 21.7502C36.1864 21.7434 35.6198 21.8773 35.11 22.1402C34.6039 22.3874 34.1776 22.7721 33.88 23.2502C33.5564 23.7276 33.3887 24.2936 33.4 24.8702C33.3891 25.429 33.5346 25.9797 33.82 26.4602C34.0597 26.9366 34.4222 27.3405 34.87 27.6302Z",
					fill: "#FF585B"
				}), a.a.createElement("path", {
					d: "M38.68 33.0002C38.0443 32.6933 37.3457 32.5392 36.64 32.5502C35.9438 32.5394 35.255 32.6936 34.63 33.0002C34.05 33.278 33.5609 33.715 33.22 34.2602C32.8649 34.7654 32.6744 35.3678 32.6744 35.9852C32.6744 36.6026 32.8649 37.205 33.22 37.7102C33.5748 38.2212 34.0623 38.6257 34.63 38.8802C35.2562 39.1836 35.9442 39.3376 36.64 39.3302C37.3454 39.3379 38.0432 39.184 38.68 38.8802C39.2591 38.6169 39.7565 38.2023 40.12 37.6802C40.4537 37.1836 40.6313 36.5985 40.63 36.0002C40.6324 35.383 40.4552 34.7784 40.12 34.2602C39.7602 33.7199 39.2632 33.2851 38.68 33.0002Z",
					fill: "#FF585B"
				}), a.a.createElement("path", {
					d: "M54.52 20.1902L39.31 4.9802C38.0246 3.68674 36.4962 2.66024 34.8126 1.95977C33.129 1.25929 31.3235 0.898682 29.5 0.898682C27.6765 0.898682 25.871 1.25929 24.1874 1.95977C22.5038 2.66024 20.9753 3.68674 19.69 4.9802L4.47996 20.1902C3.1865 21.4756 2.16 23.004 1.45952 24.6876C0.75905 26.3712 0.398438 28.1767 0.398438 30.0002C0.398438 31.8237 0.75905 33.6292 1.45952 35.3128C2.16 36.9964 3.1865 38.5249 4.47996 39.8102L19.69 55.0202C20.9753 56.3137 22.5038 57.3402 24.1874 58.0406C25.871 58.7411 27.6765 59.1017 29.5 59.1017C31.3235 59.1017 33.129 58.7411 34.8126 58.0406C36.4962 57.3402 38.0246 56.3137 39.31 55.0202L54.52 39.8102C55.8134 38.5249 56.8399 36.9964 57.5404 35.3128C58.2409 33.6292 58.6015 31.8237 58.6015 30.0002C58.6015 28.1767 58.2409 26.3712 57.5404 24.6876C56.8399 23.004 55.8134 21.4756 54.52 20.1902ZM23.92 43.5002H18.19V24.8402L13.27 27.0002V21.6602L22.27 17.5802H23.95L23.92 43.5002ZM44.92 40.1102C44.0432 41.3133 42.8485 42.2483 41.47 42.8102C39.9566 43.453 38.3292 43.7843 36.685 43.7843C35.0407 43.7843 33.4133 43.453 31.9 42.8102C30.5371 42.2355 29.3552 41.3025 28.48 40.1102C27.651 38.9798 27.2091 37.612 27.22 36.2102C27.2015 34.9552 27.5565 33.723 28.24 32.6702C28.9308 31.5703 29.8778 30.6542 31 30.0002C30.1811 29.3345 29.5237 28.4921 29.0768 27.5361C28.63 26.5801 28.4054 25.5354 28.42 24.4802C28.3942 23.1593 28.7708 21.8619 29.5 20.7602C30.2375 19.6425 31.2781 18.758 32.5 18.2102C33.8234 17.6075 35.2607 17.2956 36.715 17.2956C38.1692 17.2956 39.6065 17.6075 40.93 18.2102C42.1475 18.765 43.1863 19.648 43.93 20.7602C44.6492 21.8441 45.0255 23.1195 45.01 24.4202C45.0008 25.4585 44.7654 26.4823 44.32 27.4202C43.8573 28.3643 43.2034 29.202 42.4 29.8802C43.5275 30.5247 44.4842 31.43 45.19 32.5202C45.8864 33.5797 46.2519 34.8224 46.24 36.0902C46.2595 37.5496 45.7717 38.9705 44.86 40.1102H44.92Z",
					fill: "#FF585B"
				})),
				y = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				v = n("./src/reddit/components/Upsell/NsfwBlocking/index.m.less"),
				x = n.n(v);
			const O = {
					d2x_nsfw_signup_blocking_de_v1: `${r.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`,
					d2x_nsfw_signup_blocking_non_us_v1: `${r.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`
				},
				S = e => {
					const t = Object(i.d)(),
						n = Object(b.b)(),
						r = Object(i.e)(y.f),
						m = Object(o.useCallback)(() => {
							r === y.a.Blurred && t(Object(p.k)({
								actionSource: p.a.NsfwBlockingModal
							}))
						}, [t, r]),
						h = (e => e ? a.a.createElement("div", {
							className: x.a.cta
						}, s.fbt._("To show mature content,", null, {
							hk: "5xfDy"
						}), a.a.createElement("br", null), s.fbt._("log in to confirm you're over 18", null, {
							hk: "29imoi"
						})) : a.a.createElement("div", {
							className: x.a.cta
						}, s.fbt._("Log in to confirm you're over 18", null, {
							hk: "RUR2Z"
						})))(r === y.a.Blurred);
					return Object(o.useEffect)(() => {
						Object(g.c)(r)
					}, [r]), a.a.createElement("div", {
						className: Object(d.a)(x.a.mainCta)
					}, a.a.createElement(k, null), h, a.a.createElement("div", {
						className: x.a.contentTitle
					}, e.contentTitle), a.a.createElement("div", {
						className: x.a.warning
					}, (() => s.fbt._("This page may contain sensitive or adult content that's not for everyone. To view it, confirm your age.", null, {
						hk: "3cUxXS"
					}))()), a.a.createElement("div", {
						className: x.a.buttonContainer
					}, a.a.createElement(w.j, {
						className: Object(d.a)(x.a.logIn),
						onClick: () => {
							n((() => e => ({
								...Object(C.n)(e),
								source: "xpromo",
								action: "click",
								noun: _
							}))()), m(), Object(g.b)(g.a.Login), t(Object(u.i)())
						}
					}, (() => s.fbt._("Log In", null, {
						hk: "4BITk"
					}))()), a.a.createElement(w.j, {
						className: x.a.cancel,
						onClick: () => {
							Object(c.b)(), n((() => e => ({
								...Object(C.n)(e),
								source: "xpromo",
								action: "dismiss",
								noun: _
							}))()), Object(g.b)(g.a.Dismiss), t(Object(l.b)("/"))
						}
					}, (() => s.fbt._("I'm not over 18", null, {
						hk: "11UX9Q"
					}))())))
				},
				E = Object(m.a)(e => {
					const t = `${r.a.assetPath}/img/nsfw-blocking-promo/snoovatar_anonymous_cropped.png`;
					return a.a.createElement("div", {
						className: x.a.qrCodeOuter
					}, a.a.createElement("div", {
						className: x.a.qrCodeInner
					}, a.a.createElement("img", {
						className: x.a.qrCode,
						alt: s.fbt._("QR Code to get the Reddit app", null, {
							hk: "2uYhIL"
						}),
						src: e.qrCodeAsset
					}), a.a.createElement("div", {
						className: x.a.copyLine1
					}, (() => s.fbt._("Download the app to use", null, {
						hk: "4i9ZxV"
					}))()), a.a.createElement("div", {
						className: x.a.copyLine2
					}, (() => s.fbt._("Anonymous Browsing", null, {
						hk: "rTJ9j"
					}))()), a.a.createElement("img", {
						className: x.a.sneakySnoo,
						src: t
					})))
				}),
				j = e => {
					const t = Object(b.b)();
					a.a.useEffect(() => {
						t((() => e => ({
							...Object(C.n)(e),
							source: "xpromo",
							action: "view",
							noun: _
						}))())
					}, [t]);
					const {
						contentTitle: n
					} = e, r = Object(i.e)(y.g), s = Object(i.e)(y.h), o = Object(i.e)(y.f), l = o === y.a.Blurred ? h.a.White : o === y.a.NoPreview ? h.a.Grey : void 0;
					return a.a.createElement("div", {
						className: x.a.container
					}, a.a.createElement(S, {
						contentTitle: n
					}), a.a.createElement("div", {
						className: Object(d.a)(x.a.footerWrapper, {
							[x.a.mIsModal]: o === y.a.Blurred
						})
					}, a.a.createElement(h.b, {
						textColor: l
					})), a.a.createElement(E, {
						qrCodeAsset: (() => r === f.Cc.Enabled || s === f.qb.BlurredPreview || s === f.qb.NoPreview ? O.d2x_nsfw_signup_blocking_de_v1 : O.d2x_nsfw_signup_blocking_non_us_v1)()
					}))
				}
		},
		"./src/reddit/constants/listingSorts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return l
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
					[s.ic.HOUR]: () => r.fbt._("Now", null, {
						hk: "ZmhY"
					}),
					[s.ic.DAY]: () => r.fbt._("Today", null, {
						hk: "40Ugu1"
					}),
					[s.ic.WEEK]: () => r.fbt._("This Week", null, {
						hk: "14tmoK"
					}),
					[s.ic.MONTH]: () => r.fbt._("This Month", null, {
						hk: "34dbM3"
					}),
					[s.ic.YEAR]: () => r.fbt._("This Year", null, {
						hk: "14RJsa"
					}),
					[s.ic.ALL]: () => r.fbt._("All Time", null, {
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
				o = n.n(s),
				a = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/pages/ErrorPages/index.m.less"),
				l = n.n(i);
			const c = e => {
					let {
						message: t
					} = e;
					return o.a.createElement("div", {
						className: l.a.container
					}, o.a.createElement("h3", {
						className: l.a.title
					}, t || r.fbt._("Sorry, there doesn't seem to be anything here.", null, {
						hk: "3VvHek"
					})), o.a.createElement(a.n, {
						className: l.a.primaryRouterLink,
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
						className: l.a.container
					}, o.a.createElement("h3", {
						className: l.a.title
					}, t || r.fbt._("Sorry, You do not have permission to view this page.", null, {
						hk: "4lRbHD"
					})), o.a.createElement(a.n, {
						className: l.a.primaryRouterLink,
						to: "/"
					}, r.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})))
				}
		},
		"./src/reddit/pages/ProfileBlockInterstitial/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1tjWF-96KbJjdBGufYe6Lu",
				accent: "_1IHNP4dWxy7U5QgxQxi5If",
				title: "KY1h4po8s5PdqDHk-wjpB",
				subtitle: "_2hJJe3AbHRX6HhK43NwbWS",
				avatarContainer: "CE8h3MaaAIApJVVopVtob",
				avatar: "_3irN5APGI7MZ0SaDRl6MqN",
				avatarBlockIcon: "_9vWkG7-BD-CXaW0ZmaAYA",
				avatarIconContainer: "_26b11ZsQwO7zJjCuPAI89x",
				btnContainer: "_3uDT2KC9eHKU_3y6ZKXSZ-",
				btn: "_1yQHj4iPQKoswy8UZ3MADy"
			}
		},
		"./src/reddit/pages/ProfileBlockInterstitial/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-router/esm/react-router.js"),
				a = n("./src/reddit/selectors/telemetry.ts"),
				i = n("./src/telemetry/models/Event.ts");
			var l = n("./src/reddit/hooks/useTracking.ts"),
				c = n("./src/reddit/icons/fonts/index.tsx");
			var d = e => s.a.createElement("svg", {
					className: e.className,
					width: "1821",
					height: "283",
					viewBox: "0 0 1821 283",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("g", {
					clipPath: "url(#clip0_2660_632712)"
				}, s.a.createElement("path", {
					d: "M3025.95 118.337C3266.52 166.378 3558.75 170.416 3737.36 10.3669C3915.98 -149.683 3977.84 -352.145 3977.84 -352.145L-1003.56 -3153.19L-2982.2 -644.204C-2793.39 -416.675 -2314.26 -0.0620003 -1908.19 -153.832C-1400.6 -346.044 -1285.84 -181.163 -1113.53 -60.7893C-941.226 59.5848 -682.031 74.0078 -382.757 -66.3239C-83.4834 -206.656 520.033 475.612 1135.3 216.276C1557.45 38.3353 1689.92 -190.512 1953.87 -188.296C2217.81 -186.081 2725.23 58.2852 3025.95 118.337Z",
					fill: "#FF9999"
				}), s.a.createElement("path", {
					opacity: "0.7",
					d: "M3242.16 164.238C3492.92 218.39 3737.98 115.535 3829.16 57.338C3920.35 -0.858859 4078.81 -186.192 4078.81 -186.192L-1031.4 -3253.8L-3007.16 -743.085C-2804.71 -507.363 -2295.74 -72.8347 -1879.48 -220.494C-1359.17 -405.068 -1235.32 -234.732 -1053.16 -108.442C-871 17.8472 -601.951 38.186 -295.98 -98.1257C9.99124 -234.437 655.794 473.214 1285.7 222.665C1717.9 50.7538 1848.36 -179.298 2121.97 -171.282C2395.57 -163.266 2928.73 96.5485 3242.16 164.238Z",
					fill: "#FB133A"
				})), s.a.createElement("defs", null, s.a.createElement("clipPath", {
					id: "clip0_2660_632712"
				}, s.a.createElement("rect", {
					width: "1821",
					height: "283",
					fill: "white"
				})))),
				m = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/pages/ProfileBlockInterstitial/index.m.less"),
				p = n.n(u);
			const {
				fbt: h
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(o.i)(e => {
				let {
					username: t,
					uid: n,
					avatar: o,
					history: u,
					location: b
				} = e;
				const f = Object(l.a)();
				return Object(r.useEffect)(() => {
					f((e => t => ({
						source: i.f.BlockedProfileInterstitial,
						action: i.d.View,
						noun: i.e.BlockedProfileInterstitial,
						blockedUser: {
							id: e
						},
						...a.n(t)
					}))(n))
				}, [f, n]), s.a.createElement("div", {
					className: p.a.container
				}, s.a.createElement(d, {
					className: p.a.accent
				}), s.a.createElement("div", {
					className: p.a.avatarContainer
				}, s.a.createElement("img", {
					className: p.a.avatar,
					src: null != o ? o : "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_3.png",
					alt: h._("Blocked user avatar", null, {
						hk: "V2K4Y"
					})
				}), s.a.createElement("div", {
					className: p.a.avatarIconContainer
				}, s.a.createElement(c.a, {
					name: "kick_fill",
					className: p.a.avatarBlockIcon,
					isFilled: !0
				}))), s.a.createElement("h3", {
					className: p.a.title
				}, h._("u/{name} is blocked", [h._param("name", t)], {
					hk: "18rExM"
				})), s.a.createElement("p", {
					className: p.a.subtitle
				}, h._("Are you sure you want to continue to their profile?", null, {
					hk: "1UmYAf"
				})), s.a.createElement("div", {
					className: p.a.btnContainer
				}, s.a.createElement(m.t, {
					className: p.a.btn,
					to: `${b.pathname}?consent=true`,
					kind: m.b.InternalLink,
					priority: m.c.Primary,
					size: m.d.L,
					onClick: () => f((e => t => ({
						source: i.f.BlockedProfileInterstitial,
						action: i.d.Accept,
						noun: i.e.BlockedProfileInterstitial,
						blockedUser: {
							id: e
						},
						...a.n(t)
					}))(n)),
					isFullWidth: !0,
					isSquare: !0
				}, h._("Continue", null, {
					hk: "3eqDZf"
				})), s.a.createElement(m.t, {
					className: p.a.btn,
					to: "#",
					kind: m.b.InternalLink,
					priority: m.c.Secondary,
					size: m.d.L,
					onClick: () => {
						f((e => t => ({
							source: i.f.BlockedProfileInterstitial,
							action: i.d.Deny,
							noun: i.e.BlockedProfileInterstitial,
							blockedUser: {
								id: e
							},
							...a.n(t)
						}))(n)), u.goBack()
					},
					isFullWidth: !0,
					isSquare: !0
				}, h._("Go Back", null, {
					hk: "2uq6mz"
				}))))
			})
		},
		"./src/reddit/pages/ProfileComments/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/lodash/fromPairs.js"),
				s = n.n(r),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/constants/index.ts"),
				d = n("./src/lib/extractQueryParams/index.ts"),
				m = n("./src/lib/makeListingKey/index.ts"),
				u = n("./src/reddit/actions/nsfwBlocking/async.tsx"),
				p = n("./src/reddit/actions/pages/profileComments/index.ts"),
				h = n("./src/reddit/actions/pages/profileShared.ts"),
				b = n("./src/reddit/components/ContentGate/index.tsx"),
				f = n("./src/reddit/components/EmptyProfile/index.ts"),
				w = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				g = n("./src/reddit/components/JumpToContent/index.tsx"),
				C = n("./src/lib/classNames/index.ts"),
				_ = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				k = n("./src/lib/lessComponent.tsx"),
				y = n("./src/reddit/components/ClassicPost/index.tsx"),
				v = n("./src/reddit/components/OverviewChronoList/ListItem.tsx"),
				x = n("./src/reddit/components/OverviewCommentPost/index.tsx"),
				O = n("./src/reddit/components/OverviewConversationsPost/Border/index.tsx"),
				S = n("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx"),
				E = n("./src/reddit/constants/postLayout.ts"),
				j = n("./src/reddit/contexts/PageLayer/index.tsx"),
				P = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				N = n("./src/reddit/selectors/commentSelector.ts"),
				L = n("./src/reddit/components/ProfileCommentList/ListItem.m.less"),
				I = n.n(L);

			function T() {
				return (T = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const B = k.a.wrapped(y.default, "ClassicPost", I.a),
				D = k.a.wrapped(x.a, "OverviewCommentPost", I.a),
				R = Object(j.u)({
					currentProfileName: j.i,
					pageLayer: e => e
				}),
				F = Object(l.c)({
					comment: (e, t) => {
						let {
							itemId: n
						} = t;
						return Object(N.b)(e, {
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
			var W = R(Object(i.b)(F)(e => {
				const {
					comment: t,
					itemId: n,
					isFirstInCommentList: r,
					isLastInCommentList: s,
					layout: o,
					profileName: i,
					allowModToolsUnderComments: l
				} = e;
				if (o === E.g.Compact) return a.a.createElement(v.a, e);
				const {
					height: c,
					width: d,
					...m
				} = e;
				return a.a.createElement(A, m, r && a.a.createElement(O.a, {
					isFirst: !0
				}, o === E.g.Large ? a.a.createElement(B, T({}, e, {
					availableWidth: d,
					inSubredditOrProfile: !1,
					isOverlay: !1
				})) : a.a.createElement(D, T({}, e, {
					commentId: n,
					profileName: i
				}))), a.a.createElement(O.a, {
					isLast: s
				}, a.a.createElement(S.a, {
					commentId: n,
					depth: t.parentId ? 1 : 0,
					isFirst: !0,
					isLast: !0,
					key: n,
					profileName: i,
					showModTools: l
				})))
			}));
			const A = Object(_.a)(e => a.a.createElement("div", {
				className: Object(C.a)(I.a.backgroundMargin, {
					[I.a.isFirstInCommentList]: e.isFirstInCommentList,
					[I.a.isLastInCommentList]: e.isLastInCommentList
				}),
				style: {
					background: Object(P.e)(e)
				}
			}, e.children));
			var M = n("./src/reddit/components/ProfileItemList/index.tsx"),
				U = n("./node_modules/lodash/noop.js"),
				H = n.n(U),
				q = n("./src/reddit/actions/ads/index.ts"),
				z = n("./src/reddit/actions/comment/list.ts"),
				G = n("./src/reddit/actions/post.ts"),
				K = n("./src/reddit/components/TrackingHelper/index.tsx"),
				V = n("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				Z = n("./src/reddit/helpers/trackers/post.ts"),
				Y = n("./src/reddit/featureFlags/index.ts"),
				J = n("./src/reddit/selectors/comments.ts"),
				Q = n("./src/reddit/selectors/posts.ts"),
				X = n("./src/reddit/selectors/profileComments.ts"),
				$ = n("./src/reddit/selectors/subreddit.ts"),
				ee = n("./src/reddit/selectors/tracking.ts"),
				te = n("./src/reddit/selectors/user.ts");
			const ne = Object(j.u)(),
				re = {
					apiError: X.a,
					apiPending: X.b,
					currentUser: te.k,
					measureScrollFPS: Y.d.measureScrollFPS,
					layout: j.S,
					loadMore: X.d,
					subredditsById: $.bb,
					viewportDataLoaded: ee.a,
					commentsById: J.q,
					itemIds: X.f,
					itemIdToPostId: X.e,
					postsById: Q.J,
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
				se = Object(l.c)(re),
				oe = Object(i.b)(se, e => ({
					onBottomViewed: (t, n) => e(Object(z.c)(t, n)),
					adBrandSafetyStatusReceived: t => {
						e(q.d({
							isViewSafe: t
						}))
					},
					openPost: t => e(Object(G.L)(t)),
					fireAdPixelsOfType: H.a,
					trackOnPostEnteredViewport: H.a
				}), (e, t, n) => ({
					...e,
					...t,
					...n,
					postClickEventFactory: (e, t) => Object(Z.k)(e, t),
					postComponentForLayout: V.b
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
			const ie = e => a.a.createElement(W, ae({}, e, {
					allowModToolsUnderComments: !0
				})),
				le = (e => Object(K.c)(ne(oe(e))))(M.a);
			var ce = e => a.a.createElement(le, ae({}, e, {
					itemComponent: ie
				})),
				de = n("./src/reddit/components/ProfileNavMenu/index.tsx"),
				me = n("./src/reddit/components/ProfileSidebar/index.tsx"),
				ue = n("./src/reddit/components/Upsell/NsfwBlocking/index.tsx"),
				pe = n("./src/reddit/helpers/name/index.ts"),
				he = n("./src/reddit/helpers/trackers/screenview.ts"),
				be = n("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				fe = n("./src/reddit/layout/page/Listing/index.tsx"),
				we = n("./src/reddit/models/ContentGate.ts"),
				ge = n("./src/reddit/pages/ErrorPages/index.tsx"),
				Ce = n("./src/reddit/pages/ProfileBlockInterstitial/index.tsx"),
				_e = n("./src/reddit/selectors/experiments/antievil/index.tsx"),
				ke = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				ye = n("./src/reddit/selectors/profile.ts");

			function ve() {
				return (ve = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const xe = Object(j.u)(),
				Oe = Object(l.a)(j.E, te.kb, (e, t) => {
					let {
						location: n
					} = t;
					return s()([...Object(d.a)(n.search)])
				}, j.S, (e, t) => {
					let {
						match: n
					} = t;
					return n.params.profileName
				}, (e, t) => {
					let {
						match: n
					} = t;
					return Object(ye.j)(e, {
						profileName: n.params.profileName
					})
				}, te.Q, (e, t) => {
					let {
						match: n
					} = t;
					return Object(te.f)(e, c.kc + n.params.profileName)
				}, _e.c, (e, t) => {
					let {
						match: n
					} = t;
					return Object(te.L)(e, {
						profileName: n.params.profileName
					})
				}, ke.f, (e, t, n, r, s, o, a, i, l, c, d) => {
					var u, p;
					const {
						sort: b,
						t: f
					} = Object(h.b)(n), w = Object(m.a)(`u_${s}`, b, n);
					return {
						contentGateInfo: i,
						over18Prefs: t,
						isLoggedIn: a,
						isOwnProfile: e,
						isProfileNSFW: !!o && o.isNSFW,
						layout: r,
						listingKey: w,
						profileName: s,
						sort: b,
						timeSort: f,
						avatar: null === (u = null == o ? void 0 : o.icon) || void 0 === u ? void 0 : u.url,
						isProfileBlockInterstitialEnabled: l,
						isBlocked: c,
						profileId: null !== (p = null == o ? void 0 : o.id) && void 0 !== p ? p : "",
						nsfwBlockingExperiment: d
					}
				}),
				Se = Object(i.b)(Oe, (e, t) => ({
					onLoadMore: () => e(Object(p.moreItemsRequested)()),
					onLayoutChange: () => e(Object(p.profileCommentsRequested)({
						...t.match,
						queryParams: s()([...Object(d.a)(t.location.search)])
					})),
					openNsfwModal: () => e(Object(u.a)())
				}));
			t.default = xe(Se(Object(be.d)(e => {
				const {
					avatar: t,
					contentGateInfo: n,
					isBlocked: r,
					isOwnProfile: s,
					isProfileBlockInterstitialEnabled: i,
					isProfileNSFW: l,
					listingKey: d,
					nsfwBlockingExperiment: m,
					onLoadMore: u,
					onLayoutChange: p,
					openNsfwModal: h,
					over18Prefs: C,
					pageLayer: _,
					profileId: k,
					profileName: y,
					sort: v,
					timeSort: x
				} = e;
				if (Object(o.useEffect)(() => {
						l && !s && m === ke.a.Blurred && h()
					}, [m, s, l, h]), !y || !_) return null;
				if (n && n.profileDeleted) return a.a.createElement(b.default, {
					contentGateType: we.a.ProfileDeleted,
					profileName: y
				});
				if (n && n.profileSuspended) return a.a.createElement(b.default, {
					contentGateType: we.a.ProfileSuspended,
					profileName: y
				});
				if (451 === _.status || n && n.profileBlockedForLegalReason) return a.a.createElement(b.default, {
					contentGateType: we.a.ProfileBlockedForLegalReason,
					profileName: y
				});
				const O = _.queryParams && "true" === _.queryParams.consent;
				if (403 === _.status || r && !O) return i ? a.a.createElement(Ce.a, {
					username: y,
					avatar: t,
					uid: k
				}) : a.a.createElement(ge.a, null);
				if (404 === _.status) return a.a.createElement(b.default, {
					contentGateType: we.a.ProfileDoesNotExist,
					profileName: y
				});
				const S = y.toLowerCase(),
					E = `/user/${y}/comments/`,
					j = {
						listingKey: d,
						listingName: S
					};
				if (l && !s && m === ke.a.NoPreview) return a.a.createElement(ue.a, {
					contentTitle: Object(pe.d)(y)
				});
				if (!C && l && !s && m !== ke.a.Blurred) return a.a.createElement(b.default, {
					contentGateType: we.a.Nsfw,
					subredditName: y
				});
				const P = {
					sort: v,
					baseUrl: E,
					sortOptions: c.Db,
					timeSort: x
				};
				return a.a.createElement(fe.a, {
					className: e.className,
					fitPageToContent: !0,
					contentNavBar: a.a.createElement(a.a.Fragment, null, a.a.createElement(de.a, {
						profileName: y,
						viewBlockedConsent: O
					})),
					content: a.a.createElement(a.a.Fragment, null, a.a.createElement(w.a, P), a.a.createElement(g.a, null), a.a.createElement(ce, {
						listingKey: d,
						listingName: S,
						listingViewed: (e, t) => Object(he.o)(d, v, t, e, x),
						noPostsComponent: () => a.a.createElement(f.b, {
							profileName: y,
							timeSort: x
						}),
						onLoadMore: u,
						onTryAgain: p,
						inSubredditOrProfile: !1
					})),
					sidebar: a.a.createElement(me.a, ve({}, j, {
						profileName: y
					}))
				})
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileComments.86909d9bc4f7bad7a607.js.map