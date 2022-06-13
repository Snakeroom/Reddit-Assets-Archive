// https://www.redditstatic.com/desktop2x/reddit-components-ContentGate.5f7f5cef208f6af7b18c.js
// Retrieved at 6/13/2022, 1:00:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ContentGate"], {
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
				a = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				s = n("./src/chat/controls/Svg/index.m.less"),
				l = n.n(s);
			t.a = i.a.wrapped(e => {
				const t = {
						height: e.height || void 0,
						width: e.width || void 0
					},
					{
						disable: n,
						active: r,
						hover: i
					} = e;
				return a.a.createElement("svg", {
					className: Object(o.a)(e.className, {
						[l.a.disable]: n,
						[l.a.active]: r,
						[l.a.hover]: !!i
					}),
					viewBox: e.viewBox,
					style: t,
					onClick: e.onClick
				}, e.children)
			}, "Component", l.a)
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
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				i = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/react-router/esm/react-router.js"),
				l = n("./src/reddit/contexts/NavbarExp.ts"),
				c = n("./node_modules/reselect/es/index.js"),
				u = n("./src/lib/lessComponent.tsx"),
				d = n("./src/lib/loginHref/index.ts"),
				m = n("./src/reddit/actions/contentGate.ts"),
				h = n("./src/reddit/actions/preferences.ts"),
				p = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx"),
				b = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				_ = n("./src/reddit/components/Footer/index.tsx"),
				E = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				y = n("./src/reddit/components/RichTextJson/index.tsx"),
				k = n("./src/reddit/components/SubredditSearchCarousel/async.tsx"),
				v = n("./src/reddit/components/TextWithLinks/index.tsx"),
				S = n("./src/reddit/constants/parameters.ts"),
				g = n("./src/reddit/contexts/PageLayer/index.tsx"),
				x = n("./src/reddit/controls/Button/index.tsx"),
				f = n("./src/chat/controls/Svg/index.tsx");

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var w = e => o.a.createElement(f.a, C({}, e, {
					viewBox: "-1 -1 21 21"
				}), o.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				B = n("./src/reddit/models/ContentGate.ts"),
				L = n("./src/lib/constants/index.ts"),
				T = n("./src/reddit/selectors/platform.ts"),
				j = n("./src/reddit/selectors/user.ts");
			var R = n("./src/reddit/selectors/meta.ts"),
				O = n("./src/reddit/components/ContentGate/index.m.less"),
				P = n.n(O);
			const {
				fbt: D
			} = n("./node_modules/fbt/lib/FbtPublic.js"), q = u.a.wrapped(w, "PrivateKey", P.a), F = u.a.div("ButtonsContainer", P.a), N = u.a.div("Container", P.a), M = u.a.div("ContainerExp", P.a), A = u.a.div("Description", P.a), I = u.a.div("PrivateSubredditDetails", P.a), G = u.a.div("PrivateSubredditDescription", P.a), H = u.a.h3("PrivateSubredditName", P.a), U = u.a.a("Link", P.a), W = u.a.wrapped(x.n, "LinkRouterButton", P.a), z = u.a.wrapped(x.m, "LinkButton", P.a), K = u.a.wrapped(x.q, "SecondaryLinkRouterButton", P.a), Z = u.a.wrapped(x.p, "SecondaryLinkButton", P.a), J = u.a.wrapped(W, "GoHomeLinkButton", P.a), V = u.a.wrapped(b.a, "CreateCommunityButton", P.a), Y = u.a.img("Image", P.a), X = u.a.img("ImagePlaceholder", P.a), Q = u.a.wrapped(W, "LeftLinkRouterButton", P.a), $ = u.a.wrapped(z, "LeftLinkButton", P.a), ee = u.a.wrapped(Z, "SecondaryLeftLinkButton", P.a), te = u.a.wrapped(K, "SecondaryLeftLinkRouterButton", P.a), ne = u.a.h3("Title", P.a), re = u.a.div("PageBody", P.a), ae = u.a.div("InterstitialMessageWrapper", P.a), oe = Object(c.c)({
				isLoggedIn: j.P,
				origin: R.j,
				user: j.k,
				isPrivateSubredditContributorRequestPending: e => (e => {
					if (!Object(j.Q)(e)) return !1;
					const t = Object(T.d)(e);
					if (!t) return !1;
					const n = Object(j.f)(e, t);
					if (!n) return !1;
					if (!n.privateSubreddit) return !1;
					const {
						isContributorRequestTimestamp: r
					} = n;
					if (!r) return !1;
					const a = 30 * L.B;
					return r > Date.now() - a
				})(e),
				isSeo: R.g
			}), ie = Object(g.u)(), se = Object(i.b)(oe, (e, t) => {
				let {
					subredditName: n
				} = t;
				return {
					continueToQuarantinedSubreddit: async () => {
						await e(h.D(n)), window.location.reload()
					},
					continueToGatedSubreddit: async () => {
						await e(h.v(n)), window.location.reload()
					},
					setNSFWPreference: async () => {
						await e(Object(m.o)())
					}
				}
			}), le = e => {
				const {
					banMessage: t,
					contentGateType: n,
					continueToQuarantinedSubreddit: a,
					continueToGatedSubreddit: i,
					isLoggedIn: s,
					isContributorRequestsDisabled: l,
					isPrivateSubredditContributorRequestPending: c,
					isSeo: u,
					location: h,
					origin: b,
					pageLayer: _,
					quarantineRequiresEmail: g,
					quarantineMessage: x,
					quarantineMessageHtml: f,
					quarantineMessageRTJson: C,
					interstitialWarningMessage: w,
					interstitialWarningMessageHtml: L,
					interstitialWarningMessageRTJson: T,
					setNSFWPreference: j,
					subredditDescription: R,
					subredditName: O,
					user: N
				} = e, M = async () => {
					if (s ? await j() : await Object(m.n)(), u) {
						const e = new URL(window.location.href);
						e.searchParams.set(S.g, "1"), window.location.href = e.href
					} else window.location.reload()
				};
				switch (n) {
					case B.a.GoldSubreddit:
						return o.a.createElement("div", null, o.a.createElement(Y, {
							src: `${r.a.assetPath}/img/gold/premium-crest.png`
						}), o.a.createElement(ne, null, D._("r/{community name} is a Reddit Premium community", [D._param("community name", O)], {
							hk: "2lyDwB"
						})), o.a.createElement(A, null, D._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), o.a.createElement(F, null, N ? o.a.createElement(ee, {
							href: `${r.a.redditUrl}/premium`,
							redditStyle: !0
						}, D._("Get Premium", null, {
							hk: "3ChWi4"
						})) : o.a.createElement($, {
							href: Object(d.a)(h, b),
							redditStyle: !0
						}, D._("Sign Up", null, {
							hk: "rvpjy"
						})), N ? o.a.createElement(W, {
							to: "/",
							redditStyle: !0
						}, D._("Go Home", null, {
							hk: "49p4or"
						})) : o.a.createElement(Z, {
							href: Object(d.a)(h, b),
							redditStyle: !0
						}, D._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case B.a.Nsfw:
					case B.a.NsfwCustomFeed:
						return o.a.createElement("div", null, o.a.createElement(Y, {
							src: `${r.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), o.a.createElement(ne, null, n === B.a.Nsfw ? D._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : D._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), o.a.createElement(A, null, D._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), o.a.createElement(F, null, o.a.createElement(Q, {
							to: "/",
							redditStyle: !0
						}, D._("No", null, {
							hk: "3fMglW"
						})), o.a.createElement(Z, {
							onClick: M,
							redditStyle: !0
						}, D._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case B.a.PrivateSubreddit:
						return o.a.createElement("div", null, o.a.createElement(q, null), o.a.createElement(ne, null, "r/", O, " ", D._("is a private community", null, {
							hk: "7zZmq"
						})), R && R.length && o.a.createElement(I, null, o.a.createElement(H, null, "r/", O), o.a.createElement(G, null, o.a.createElement("div", null, R))), o.a.createElement(A, null, D._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", O, " ", D._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), o.a.createElement("br", null), D._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), o.a.createElement(F, null, N ? o.a.createElement(o.a.Fragment, null, !l && o.a.createElement(p.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: P.a.ContributorRequestButton,
							isContributorRequestPending: c
						}), o.a.createElement(ee, {
							href: `${r.a.redditUrl}/message/compose?to=/r/${O}`,
							redditStyle: !0
						}, D._("Message Mods", null, {
							hk: "vVe1i"
						}))) : o.a.createElement(ee, {
							href: Object(d.a)(h, b),
							redditStyle: !0
						}, D._("Sign Up", null, {
							hk: "rvpjy"
						})), o.a.createElement(W, {
							to: "/",
							redditStyle: !0
						}, D._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))), O && o.a.createElement(k.a, {
							subredditName: O
						}));
					case B.a.QuarantinedSubreddit:
						return o.a.createElement("div", null, o.a.createElement(Y, {
							src: `${r.a.assetPath}/img/content-gate-icons/quarantined.png`
						}), o.a.createElement(ne, null, D._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), o.a.createElement(A, null, D._("This community is {=quarantined}", [D._param("=quarantined", o.a.createElement(U, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, D._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), o.a.createElement(ae, null, C ? o.a.createElement(y.b, {
							content: C,
							rtJsonElementProps: {
								pageLayer: _
							}
						}) : f ? o.a.createElement(E.a, {
							html: f
						}) : x || D._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), D._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), o.a.createElement(F, null, ((e, t, n) => {
							return !(e && e.hasVerifiedEmail) && n ? o.a.createElement(F, null, o.a.createElement(te, {
								to: "/",
								redditStyle: !0
							}, D._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(z, {
								href: `${r.a.redditUrl}/prefs/update`,
								redditStyle: !0
							}, D._("Verify Email", null, {
								hk: "1893cq"
							}))) : o.a.createElement(F, null, o.a.createElement(Q, {
								to: "/",
								redditStyle: !0
							}, D._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(Z, {
								onClick: t,
								redditStyle: !0
							}, D._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(N, a, g)));
					case B.a.GatedSubreddit:
						return o.a.createElement("div", null, o.a.createElement(ne, null, D._("Are you sure you want to view this community?", null, {
							hk: "1K5UIm"
						})), o.a.createElement(A, null, o.a.createElement(ae, null, T ? o.a.createElement(y.b, {
							content: T,
							rtJsonElementProps: {
								pageLayer: _
							}
						}) : L ? o.a.createElement(E.a, {
							html: L
						}) : w), D._("Are you certain you want to continue?", null, {
							hk: "3pT969"
						})), o.a.createElement(F, null, o.a.createElement(Q, {
							to: "/",
							redditStyle: !0
						}, D._("No Thank You", null, {
							hk: "4B26AR"
						})), o.a.createElement(Z, {
							onClick: i,
							redditStyle: !0
						}, D._("Continue", null, {
							hk: "2rLyAk"
						}))));
					case B.a.SubredditBanned:
						return o.a.createElement("div", null, o.a.createElement(Y, {
							src: `${r.a.assetPath}/img/content-gate-icons/banned.png`
						}), o.a.createElement(ne, null, D._("r/{community name} has been banned from Reddit", [D._param("community name", O)], {
							hk: "2at9Se"
						})), (e => o.a.createElement(A, null, e ? o.a.createElement(v.a, {
							linkClassName: P.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : D._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), o.a.createElement(F, null, o.a.createElement(W, {
							to: "/",
							redditStyle: !0
						}, D._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case B.a.SubredditBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(Y, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ne, null, D._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), o.a.createElement(F, null, o.a.createElement(W, {
							to: "/",
							redditStyle: !0
						}, D._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case B.a.SubredditDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(X, null), o.a.createElement(ne, null, D._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), o.a.createElement(A, null, D._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), o.a.createElement(F, null, N && o.a.createElement(V, {
							eventSource: "content_gate"
						}), o.a.createElement(J, {
							to: "/",
							redditStyle: !0
						}, D._("Go Home", null, {
							hk: "49p4or"
						}))));
					case B.a.ProfileDoesNotExist:
					case B.a.ProfileDeleted:
					case B.a.ProfileSuspended:
					case B.a.ProfileBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(Y, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ne, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case B.a.ProfileBlockedForLegalReason:
									return D._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case B.a.ProfileDeleted:
									return D._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case B.a.ProfileSuspended:
									return o.a.createElement(o.a.Fragment, null, D._("This account has been {=suspended} .", [D._param("=suspended", o.a.createElement(U, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, D._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case B.a.ProfileDoesNotExist:
									return o.a.createElement(o.a.Fragment, null, o.a.createElement(ne, null, D._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), o.a.createElement(A, null, D._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), o.a.createElement(F, null, o.a.createElement(J, {
							to: "/",
							redditStyle: !0
						}, D._("Go Home", null, {
							hk: "49p4or"
						}))));
					case B.a.CustomFeedDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(Y, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ne, null, D._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), o.a.createElement(F, null, o.a.createElement(J, {
							to: "/",
							redditStyle: !0
						}, D._("Go Home", null, {
							hk: "49p4or"
						}))));
					case B.a.PostBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(Y, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ne, null, D._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), o.a.createElement(F, null, o.a.createElement(W, {
							to: "/",
							redditStyle: !0
						}, D._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = ie(se(Object(s.i)(e => {
				const t = Object(a.useContext)(l.a) ? M : N;
				return o.a.createElement(t, null, o.a.createElement("div", {
					"data-testid": "content-gate"
				}, o.a.createElement(re, null, le(e))), o.a.createElement(_.b, null))
			})))
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const a = Object(r.a)({
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
			t.a = a
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
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				i = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				l = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/constants/modals.ts"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				b = n("./src/reddit/selectors/user.ts"),
				_ = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				E = n.n(_),
				y = n("./src/lib/lessComponent.tsx");
			const k = "create-community-button",
				v = y.a.wrapped(u.c, "StyledTooltip", E.a),
				S = Object(s.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(b.pb)(e),
					userIsSuspended: b.X
				});
			t.a = Object(i.b)(S, (e, t) => {
				let {
					eventSource: n
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(p.c)(n)), e(Object(l.h)(m.a.SUBREDDIT_CREATION_MODAL_ID))
					},
					onShowTooltip: () => e(Object(c.f)({
						tooltipId: k
					})),
					onHideTooltip: () => e(Object(c.i)())
				}
			})(Object(d.c)(e => {
				let {
					className: t,
					eventSource: n,
					onShowTooltip: a,
					onHideTooltip: i,
					openCommunityCreation: s,
					sendEvent: l,
					userDoesNotHaveEnoughExpToCreateCommunity: c,
					userIsSuspended: u,
					onClick: d
				} = e;
				return o.a.createElement(h.t, {
					className: t,
					disabled: u || c,
					onClick: e => {
						d && d(e), s(l)
					},
					onMouseEnter: a,
					onMouseLeave: i,
					priority: h.c.Secondary,
					id: k,
					isFullWidth: !0
				}, r.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), c ? o.a.createElement(v, {
					caretOnTop: !0,
					tooltipId: k,
					text: r.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : u ? o.a.createElement(v, {
					caretOnTop: !0,
					tooltipId: k,
					text: r.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
				}) : null)
			}))
		},
		"./src/reddit/components/SubredditSearchCarousel/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				i = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/reddit/selectors/experiments/joinOptimizations.ts");
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
					const t = Object(i.e)(s.e),
						n = Object(i.e)(s.a);
					return t || n ? o.a.createElement(l, e) : null
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ContentGate.5f7f5cef208f6af7b18c.js.map