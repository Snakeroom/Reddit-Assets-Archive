// https://www.redditstatic.com/desktop2x/reddit-components-ContentGate.88707774db0c1018dd6c.js
// Retrieved at 4/28/2021, 12:50:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ContentGate"], {
		"./node_modules/lodash/flatMap.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseFlatten.js"),
				a = n("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return r(a(e, t), 1)
			}
		},
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
				s = n("./src/lib/lessComponent.tsx"),
				i = n("./src/chat/controls/Svg/index.m.less"),
				l = n.n(i);
			t.a = s.a.wrapped(e => {
				const t = {
						height: e.height || void 0,
						width: e.width || void 0
					},
					{
						disable: n,
						active: r,
						hover: s
					} = e;
				return a.a.createElement("svg", {
					className: Object(o.a)(e.className, {
						[l.a.disable]: n,
						[l.a.active]: r,
						[l.a.hover]: !!s
					}),
					viewBox: e.viewBox,
					style: t
				}, e.children)
			}, "Component", l.a)
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
				quarantineMessageWrapper: "_3wi4h3DGgmtUEzxlHDUM0n",
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
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router/esm/react-router.js"),
				l = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/lessComponent.tsx"),
				u = n("./src/lib/loginHref/index.ts"),
				d = n("./src/reddit/actions/contentGate.ts"),
				m = n("./src/reddit/actions/preferences.ts"),
				h = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx"),
				p = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				b = n("./src/reddit/components/Footer/index.m.less"),
				_ = n.n(b);
			const {
				fbt: k
			} = n("./node_modules/fbt/lib/FbtPublic.js"), E = c.a.div("FooterContainer", _.a), g = c.a.div("UserAgreement", _.a), v = c.a.a("UserAgreementLink", _.a), f = c.a.a("PrivacyLink", _.a);
			var y = () => o.a.createElement(E, null, o.a.createElement(g, null, k._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy} . ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [k._param("=User Agreement", o.a.createElement(v, {
					href: `${r.a.redditUrl}/help/useragreement`
				}, k._("User Agreement", null, {
					hk: "2srkM2"
				}))), k._param("=Privacy Policy", o.a.createElement(f, {
					href: `${r.a.redditUrl}/help/privacypolicy`
				}, k._("Privacy Policy", null, {
					hk: "2nBcYA"
				}))), k._param("year", (new Date).getFullYear())], {
					hk: "335pdO"
				}))),
				x = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				L = n("./src/reddit/components/RichTextJson/index.tsx"),
				S = n("./node_modules/lodash/flatMap.js"),
				w = n.n(S),
				B = n("./src/lib/linkMatchers/index.ts"),
				C = n("./src/lib/linkMatchers/customLinks.ts"),
				R = n("./src/reddit/controls/OutboundLink/index.tsx");
			const T = /\[(.+?)\]\((.+?)\)/g,
				j = e => {
					const t = e.split(T);
					if (1 === t.length) return [e];
					const n = [];
					for (let r = 0; r < t.length; r += 3) {
						const [e, a, o] = t.slice(r, r + 3);
						n.push(e), n.push([o, a])
					}
					return n
				};
			var P = o.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = w()(t, j)), e.parseRegularLinks && (t = w()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = B.f.add(C.g.subreddit.prefix, C.g.subreddit.config).match(e);
						if (!t) return [e];
						const n = [];
						let r = null;
						for (const a of t) n.push(e.slice(r ? r.lastIndex : 0, a.index)), r = a, n.push([a.url, a.text]);
						return r && n.push(e.slice(r.lastIndex)), n
					})(e))), o.a.createElement(o.a.Fragment, null, " ", t.map((t, n) => {
						if (Array.isArray(t)) {
							const [r, a] = t;
							return o.a.createElement(R.b, {
								className: e.linkClassName,
								href: r,
								isSponsored: !1,
								key: n,
								source: null
							}, a)
						}
						return o.a.createElement("span", {
							key: n
						}, t)
					}), " ")
				}),
				O = n("./src/reddit/contexts/PageLayer/index.tsx"),
				q = n("./src/reddit/controls/Button/index.tsx"),
				D = n("./src/chat/controls/Svg/index.tsx");

			function A() {
				return (A = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var M = e => o.a.createElement(D.a, A({}, e, {
					viewBox: "-1 -1 21 21"
				}), o.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				F = n("./src/reddit/models/ContentGate.ts"),
				U = n("./src/lib/constants/index.ts"),
				N = n("./src/reddit/selectors/platform.ts"),
				H = n("./src/reddit/selectors/user.ts");
			var G = n("./src/reddit/selectors/meta.ts"),
				z = n("./src/reddit/components/ContentGate/index.m.less"),
				I = n.n(z);
			const {
				fbt: W
			} = n("./node_modules/fbt/lib/FbtPublic.js"), K = c.a.wrapped(M, "PrivateKey", I.a), Y = c.a.div("ButtonsContainer", I.a), Z = c.a.div("Container", I.a), J = c.a.div("Description", I.a), X = c.a.div("PrivateSubredditDetails", I.a), V = c.a.div("PrivateSubredditDescription", I.a), Q = c.a.h3("PrivateSubredditName", I.a), $ = c.a.a("Link", I.a), ee = c.a.wrapped(q.k, "LinkRouterButton", I.a), te = c.a.wrapped(q.j, "LinkButton", I.a), ne = c.a.wrapped(q.n, "SecondaryLinkRouterButton", I.a), re = c.a.wrapped(q.m, "SecondaryLinkButton", I.a), ae = c.a.wrapped(ee, "GoHomeLinkButton", I.a), oe = c.a.img("Image", I.a), se = c.a.img("ImagePlaceholder", I.a), ie = c.a.wrapped(ee, "LeftLinkRouterButton", I.a), le = c.a.wrapped(te, "LeftLinkButton", I.a), ce = c.a.wrapped(re, "SecondaryLeftLinkButton", I.a), ue = c.a.wrapped(ne, "SecondaryLeftLinkRouterButton", I.a), de = c.a.h3("Title", I.a), me = c.a.div("PageBody", I.a), he = c.a.div("QuarantineMessageWrapper", I.a), pe = Object(l.c)({
				isLoggedIn: H.I,
				origin: G.j,
				user: H.i,
				isPrivateSubredditContributorRequestPending: e => (e => {
					if (!Object(H.J)(e)) return !1;
					const t = Object(N.d)(e);
					if (!t) return !1;
					const n = Object(H.e)(e, t);
					if (!n) return !1;
					if (!n.privateSubreddit) return !1;
					const {
						isContributorRequestTimestamp: r
					} = n;
					if (!r) return !1;
					const a = 30 * U.x;
					return r > Date.now() - a
				})(e)
			}), be = Object(O.t)(), _e = Object(s.b)(pe, (e, {
				subredditName: t
			}) => ({
				continueToQuarantinedSubreddit: async () => {
					await e(m.C(t)), window.location.reload()
				},
				setNSFWPreference: async () => {
					await e(Object(d.l)())
				}
			})), ke = e => {
				const {
					banMessage: t,
					contentGateType: n,
					continueToQuarantinedSubreddit: a,
					isLoggedIn: s,
					isContributorRequestsDisabled: i,
					isPrivateSubredditContributorRequestPending: l,
					location: c,
					origin: m,
					pageLayer: b,
					quarantineRequiresEmail: _,
					quarantineMessage: k,
					quarantineMessageHtml: E,
					quarantineMessageRTJson: g,
					setNSFWPreference: v,
					subredditDescription: f,
					subredditName: y,
					user: S
				} = e, w = async () => {
					s ? await v() : await Object(d.k)(), window.location.reload()
				};
				switch (n) {
					case F.a.GoldSubreddit:
						return o.a.createElement("div", null, o.a.createElement(oe, {
							src: `${r.a.assetPath}/img/gold/premium-crest.png`
						}), o.a.createElement(de, null, W._("r/{community name} is a Reddit Premium community", [W._param("community name", y)], {
							hk: "2lyDwB"
						})), o.a.createElement(J, null, W._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), o.a.createElement(Y, null, S ? o.a.createElement(ce, {
							href: `${r.a.redditUrl}/premium`
						}, W._("Get Premium", null, {
							hk: "3ChWi4"
						})) : o.a.createElement(le, {
							href: Object(u.a)(c, m)
						}, W._("Sign Up", null, {
							hk: "rvpjy"
						})), S ? o.a.createElement(ee, {
							to: "/"
						}, W._("Go Home", null, {
							hk: "49p4or"
						})) : o.a.createElement(re, {
							href: Object(u.a)(c, m)
						}, W._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case F.a.Nsfw:
					case F.a.NsfwCustomFeed:
						return o.a.createElement("div", null, o.a.createElement(oe, {
							src: `${r.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), o.a.createElement(de, null, n === F.a.Nsfw ? W._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : W._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), o.a.createElement(J, null, W._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), o.a.createElement(Y, null, o.a.createElement(ie, {
							to: "/"
						}, W._("No", null, {
							hk: "3fMglW"
						})), o.a.createElement(re, {
							onClick: w
						}, W._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case F.a.PrivateSubreddit:
						return o.a.createElement("div", null, o.a.createElement(K, null), o.a.createElement(de, null, "r/", y, " ", W._("is a private community", null, {
							hk: "7zZmq"
						})), f && f.length && o.a.createElement(X, null, o.a.createElement(Q, null, "r/", y), o.a.createElement(V, null, o.a.createElement("div", null, f))), o.a.createElement(J, null, W._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", y, " ", W._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), o.a.createElement("br", null), W._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), o.a.createElement(Y, null, S ? o.a.createElement(o.a.Fragment, null, !i && o.a.createElement(h.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: I.a.ContributorRequestButton,
							isContributorRequestPending: l
						}), o.a.createElement(ce, {
							href: `${r.a.redditUrl}/message/compose?to=/r/${y}`
						}, W._("Message Mods", null, {
							hk: "vVe1i"
						}))) : o.a.createElement(ce, {
							href: Object(u.a)(c, m)
						}, W._("Sign Up", null, {
							hk: "rvpjy"
						})), o.a.createElement(ee, {
							to: "/"
						}, W._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))));
					case F.a.QuarantinedSubreddit:
						return o.a.createElement("div", null, o.a.createElement(oe, {
							src: `${r.a.assetPath}/img/content-gate-icons/quarantined.png`
						}), o.a.createElement(de, null, W._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), o.a.createElement(J, null, W._("This community is {=quarantined}", [W._param("=quarantined", o.a.createElement($, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, W._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), o.a.createElement(he, null, g ? o.a.createElement(L.a, {
							content: g,
							rtJsonElementProps: {
								pageLayer: b
							}
						}) : E ? o.a.createElement(x.a, {
							html: E
						}) : k || W._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), W._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), o.a.createElement(Y, null, ((e, t, n) => {
							return !(e && e.hasVerifiedEmail) && n ? o.a.createElement(Y, null, o.a.createElement(ue, {
								to: "/"
							}, W._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(te, {
								href: `${r.a.redditUrl}/prefs/update`
							}, W._("Verify Email", null, {
								hk: "1893cq"
							}))) : o.a.createElement(Y, null, o.a.createElement(ie, {
								to: "/"
							}, W._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(re, {
								onClick: t
							}, W._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(S, a, _)));
					case F.a.SubredditBanned:
						return o.a.createElement("div", null, o.a.createElement(oe, {
							src: `${r.a.assetPath}/img/content-gate-icons/banned.png`
						}), o.a.createElement(de, null, W._("r/{community name} has been banned from Reddit", [W._param("community name", y)], {
							hk: "2at9Se"
						})), (e => o.a.createElement(J, null, e ? o.a.createElement(P, {
							linkClassName: I.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : W._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), o.a.createElement(Y, null, o.a.createElement(ee, {
							to: "/"
						}, W._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case F.a.SubredditBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(oe, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(de, null, W._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), o.a.createElement(Y, null, o.a.createElement(ee, {
							to: "/"
						}, W._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case F.a.SubredditDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(se, null), o.a.createElement(de, null, W._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), o.a.createElement(J, null, W._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), o.a.createElement(Y, null, S && o.a.createElement(p.a, {
							eventSource: "content_gate"
						}), o.a.createElement(ae, {
							to: "/"
						}, W._("Go Home", null, {
							hk: "49p4or"
						}))));
					case F.a.ProfileDoesNotExist:
					case F.a.ProfileDeleted:
					case F.a.ProfileSuspended:
					case F.a.ProfileBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(oe, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(de, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case F.a.ProfileBlockedForLegalReason:
									return W._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case F.a.ProfileDeleted:
									return W._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case F.a.ProfileSuspended:
									return o.a.createElement(o.a.Fragment, null, W._("This account has been {=suspended} .", [W._param("=suspended", o.a.createElement($, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, W._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case F.a.ProfileDoesNotExist:
									return o.a.createElement(o.a.Fragment, null, o.a.createElement(de, null, W._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), o.a.createElement(J, null, W._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), o.a.createElement(Y, null, o.a.createElement(ae, {
							to: "/"
						}, W._("Go Home", null, {
							hk: "49p4or"
						}))));
					case F.a.CustomFeedDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(oe, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(de, null, W._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), o.a.createElement(Y, null, o.a.createElement(ae, {
							to: "/"
						}, W._("Go Home", null, {
							hk: "49p4or"
						}))));
					case F.a.PostBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(oe, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(de, null, W._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), o.a.createElement(Y, null, o.a.createElement(ee, {
							to: "/"
						}, W._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = be(_e(Object(i.i)(e => o.a.createElement(Z, null, o.a.createElement("div", null, o.a.createElement(me, null, ke(e))), o.a.createElement(y, null)))))
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
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				l = n("./src/reddit/actions/tooltip.ts"),
				c = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/overlay/index.ts"),
				h = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				p = n("./src/reddit/selectors/user.ts"),
				b = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				_ = n.n(b),
				k = n("./src/lib/lessComponent.tsx");
			const E = "create-community-button",
				g = k.a.wrapped(c.c, "StyledTooltip", _.a),
				v = Object(i.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(p.gb)(e),
					userIsSuspended: p.O
				});
			t.a = Object(s.b)(v, (e, {
				eventSource: t
			}) => ({
				openCommunityCreation: n => {
					n(Object(h.b)(t)), e(Object(m.a)("/subreddits/create"))
				},
				onShowTooltip: () => e(Object(l.f)({
					tooltipId: E
				})),
				onHideTooltip: () => e(Object(l.i)())
			}))(Object(u.c)(({
				className: e,
				eventSource: t,
				onShowTooltip: n,
				onHideTooltip: a,
				openCommunityCreation: s,
				sendEvent: i,
				userDoesNotHaveEnoughExpToCreateCommunity: l,
				userIsSuspended: c
			}) => o.a.createElement(d.l, {
				className: e,
				disabled: c || l,
				onClick: () => s(i),
				onMouseEnter: n,
				onMouseLeave: a,
				id: E,
				isFullWidth: !0
			}, r.fbt._("Create Community", null, {
				hk: "RLA8A"
			}), l ? o.a.createElement(g, {
				caretOnTop: !0,
				tooltipId: E,
				text: r.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
					hk: "2R1OXu"
				})
			}) : c ? o.a.createElement(g, {
				caretOnTop: !0,
				tooltipId: E,
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ContentGate.88707774db0c1018dd6c.js.map