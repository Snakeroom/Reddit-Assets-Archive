// https://www.redditstatic.com/desktop2x/reddit-components-ContentGate.947284325f658a814982.js
// Retrieved at 8/18/2021, 8:10:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ContentGate"], {
		"./node_modules/lodash/flatMap.js": function(e, t, n) {
			var a = n("./node_modules/lodash/_baseFlatten.js"),
				r = n("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return a(r(e, t), 1)
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
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
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
						active: a,
						hover: s
					} = e;
				return r.a.createElement("svg", {
					className: Object(o.a)(e.className, {
						[l.a.disable]: n,
						[l.a.active]: a,
						[l.a.hover]: !!s
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
				QuarantineMessageWrapper: "_3wi4h3DGgmtUEzxlHDUM0n",
				quarantineMessageWrapper: "_3wi4h3DGgmtUEzxlHDUM0n",
				ContributorRequestButton: "_3WUsc0xUSWlcvJ0BD4jiUz",
				contributorRequestButton: "_3WUsc0xUSWlcvJ0BD4jiUz"
			}
		},
		"./src/reddit/components/ContentGate/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var a = n("./src/config.ts"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router/esm/react-router.js"),
				l = n("./src/reddit/contexts/NavbarExp.ts"),
				c = n("./node_modules/reselect/es/index.js"),
				u = n("./src/lib/lessComponent.tsx"),
				d = n("./src/lib/loginHref/index.ts"),
				m = n("./src/reddit/actions/contentGate.ts"),
				h = n("./src/reddit/actions/preferences.ts"),
				p = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx"),
				_ = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				b = n("./src/reddit/components/Footer/index.m.less"),
				k = n.n(b);
			const {
				fbt: E
			} = n("./node_modules/fbt/lib/FbtPublic.js"), v = u.a.div("FooterContainer", k.a), g = u.a.div("UserAgreement", k.a), y = u.a.a("UserAgreementLink", k.a), f = u.a.a("PrivacyLink", k.a);
			var x = () => o.a.createElement(v, null, o.a.createElement(g, null, E._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy} . ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [E._param("=User Agreement", o.a.createElement(y, {
					href: `${a.a.redditUrl}/help/useragreement`
				}, E._("User Agreement", null, {
					hk: "2srkM2"
				}))), E._param("=Privacy Policy", o.a.createElement(f, {
					href: `${a.a.redditUrl}/help/privacypolicy`
				}, E._("Privacy Policy", null, {
					hk: "2nBcYA"
				}))), E._param("year", (new Date).getFullYear())], {
					hk: "335pdO"
				}))),
				C = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				S = n("./src/reddit/components/RichTextJson/index.tsx"),
				B = n("./node_modules/lodash/flatMap.js"),
				L = n.n(B),
				w = n("./src/lib/linkMatchers/index.ts"),
				R = n("./src/lib/linkMatchers/customLinks.ts"),
				j = n("./src/reddit/controls/OutboundLink/index.tsx");
			const T = /\[(.+?)\]\((.+?)\)/g,
				P = e => {
					const t = e.split(T);
					if (1 === t.length) return [e];
					const n = [];
					for (let a = 0; a < t.length; a += 3) {
						const [e, r, o] = t.slice(a, a + 3);
						n.push(e), n.push([o, r])
					}
					return n
				};
			var O = o.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = L()(t, P)), e.parseRegularLinks && (t = L()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = w.f.add(R.g.subreddit.prefix, R.g.subreddit.config).match(e);
						if (!t) return [e];
						const n = [];
						let a = null;
						for (const r of t) n.push(e.slice(a ? a.lastIndex : 0, r.index)), a = r, n.push([r.url, r.text]);
						return a && n.push(e.slice(a.lastIndex)), n
					})(e))), o.a.createElement(o.a.Fragment, null, " ", t.map((t, n) => {
						if (Array.isArray(t)) {
							const [a, r] = t;
							return o.a.createElement(j.b, {
								className: e.linkClassName,
								href: a,
								key: n
							}, r)
						}
						return o.a.createElement("span", {
							key: n
						}, t)
					}), " ")
				}),
				D = n("./src/reddit/contexts/PageLayer/index.tsx"),
				q = n("./src/reddit/controls/Button/index.tsx"),
				F = n("./src/chat/controls/Svg/index.tsx");

			function A() {
				return (A = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var U = e => o.a.createElement(F.a, A({}, e, {
					viewBox: "-1 -1 21 21"
				}), o.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				M = n("./src/reddit/models/ContentGate.ts"),
				N = n("./src/lib/constants/index.ts"),
				H = n("./src/reddit/selectors/platform.ts"),
				I = n("./src/reddit/selectors/user.ts");
			var z = n("./src/reddit/selectors/meta.ts"),
				G = n("./src/reddit/components/ContentGate/index.m.less"),
				W = n.n(G);
			const {
				fbt: K
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Z = u.a.wrapped(U, "PrivateKey", W.a), Y = u.a.div("ButtonsContainer", W.a), J = u.a.div("Container", W.a), V = u.a.div("ContainerExp", W.a), Q = u.a.div("Description", W.a), X = u.a.div("PrivateSubredditDetails", W.a), $ = u.a.div("PrivateSubredditDescription", W.a), ee = u.a.h3("PrivateSubredditName", W.a), te = u.a.a("Link", W.a), ne = u.a.wrapped(q.k, "LinkRouterButton", W.a), ae = u.a.wrapped(q.j, "LinkButton", W.a), re = u.a.wrapped(q.n, "SecondaryLinkRouterButton", W.a), oe = u.a.wrapped(q.m, "SecondaryLinkButton", W.a), se = u.a.wrapped(ne, "GoHomeLinkButton", W.a), ie = u.a.wrapped(_.a, "CreateCommunityButton", W.a), le = u.a.img("Image", W.a), ce = u.a.img("ImagePlaceholder", W.a), ue = u.a.wrapped(ne, "LeftLinkRouterButton", W.a), de = u.a.wrapped(ae, "LeftLinkButton", W.a), me = u.a.wrapped(oe, "SecondaryLeftLinkButton", W.a), he = u.a.wrapped(re, "SecondaryLeftLinkRouterButton", W.a), pe = u.a.h3("Title", W.a), _e = u.a.div("PageBody", W.a), be = u.a.div("QuarantineMessageWrapper", W.a), ke = Object(c.c)({
				isLoggedIn: I.I,
				origin: z.j,
				user: I.j,
				isPrivateSubredditContributorRequestPending: e => (e => {
					if (!Object(I.J)(e)) return !1;
					const t = Object(H.d)(e);
					if (!t) return !1;
					const n = Object(I.e)(e, t);
					if (!n) return !1;
					if (!n.privateSubreddit) return !1;
					const {
						isContributorRequestTimestamp: a
					} = n;
					if (!a) return !1;
					const r = 30 * N.z;
					return a > Date.now() - r
				})(e)
			}), Ee = Object(D.u)(), ve = Object(s.b)(ke, (e, {
				subredditName: t
			}) => ({
				continueToQuarantinedSubreddit: async () => {
					await e(h.A(t)), window.location.reload()
				},
				setNSFWPreference: async () => {
					await e(Object(m.l)())
				}
			})), ge = e => {
				const {
					banMessage: t,
					contentGateType: n,
					continueToQuarantinedSubreddit: r,
					isLoggedIn: s,
					isContributorRequestsDisabled: i,
					isPrivateSubredditContributorRequestPending: l,
					location: c,
					origin: u,
					pageLayer: h,
					quarantineRequiresEmail: _,
					quarantineMessage: b,
					quarantineMessageHtml: k,
					quarantineMessageRTJson: E,
					setNSFWPreference: v,
					subredditDescription: g,
					subredditName: y,
					user: f
				} = e, x = async () => {
					s ? await v() : await Object(m.k)(), window.location.reload()
				};
				switch (n) {
					case M.a.GoldSubreddit:
						return o.a.createElement("div", null, o.a.createElement(le, {
							src: `${a.a.assetPath}/img/gold/premium-crest.png`
						}), o.a.createElement(pe, null, K._("r/{community name} is a Reddit Premium community", [K._param("community name", y)], {
							hk: "2lyDwB"
						})), o.a.createElement(Q, null, K._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), o.a.createElement(Y, null, f ? o.a.createElement(me, {
							href: `${a.a.redditUrl}/premium`
						}, K._("Get Premium", null, {
							hk: "3ChWi4"
						})) : o.a.createElement(de, {
							href: Object(d.a)(c, u)
						}, K._("Sign Up", null, {
							hk: "rvpjy"
						})), f ? o.a.createElement(ne, {
							to: "/"
						}, K._("Go Home", null, {
							hk: "49p4or"
						})) : o.a.createElement(oe, {
							href: Object(d.a)(c, u)
						}, K._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case M.a.Nsfw:
					case M.a.NsfwCustomFeed:
						return o.a.createElement("div", null, o.a.createElement(le, {
							src: `${a.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), o.a.createElement(pe, null, n === M.a.Nsfw ? K._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : K._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), o.a.createElement(Q, null, K._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), o.a.createElement(Y, null, o.a.createElement(ue, {
							to: "/"
						}, K._("No", null, {
							hk: "3fMglW"
						})), o.a.createElement(oe, {
							onClick: x
						}, K._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case M.a.PrivateSubreddit:
						return o.a.createElement("div", null, o.a.createElement(Z, null), o.a.createElement(pe, null, "r/", y, " ", K._("is a private community", null, {
							hk: "7zZmq"
						})), g && g.length && o.a.createElement(X, null, o.a.createElement(ee, null, "r/", y), o.a.createElement($, null, o.a.createElement("div", null, g))), o.a.createElement(Q, null, K._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", y, " ", K._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), o.a.createElement("br", null), K._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), o.a.createElement(Y, null, f ? o.a.createElement(o.a.Fragment, null, !i && o.a.createElement(p.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: W.a.ContributorRequestButton,
							isContributorRequestPending: l
						}), o.a.createElement(me, {
							href: `${a.a.redditUrl}/message/compose?to=/r/${y}`
						}, K._("Message Mods", null, {
							hk: "vVe1i"
						}))) : o.a.createElement(me, {
							href: Object(d.a)(c, u)
						}, K._("Sign Up", null, {
							hk: "rvpjy"
						})), o.a.createElement(ne, {
							to: "/"
						}, K._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))));
					case M.a.QuarantinedSubreddit:
						return o.a.createElement("div", null, o.a.createElement(le, {
							src: `${a.a.assetPath}/img/content-gate-icons/quarantined.png`
						}), o.a.createElement(pe, null, K._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), o.a.createElement(Q, null, K._("This community is {=quarantined}", [K._param("=quarantined", o.a.createElement(te, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, K._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), o.a.createElement(be, null, E ? o.a.createElement(S.a, {
							content: E,
							rtJsonElementProps: {
								pageLayer: h
							}
						}) : k ? o.a.createElement(C.a, {
							html: k
						}) : b || K._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), K._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), o.a.createElement(Y, null, ((e, t, n) => {
							return !(e && e.hasVerifiedEmail) && n ? o.a.createElement(Y, null, o.a.createElement(he, {
								to: "/"
							}, K._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(ae, {
								href: `${a.a.redditUrl}/prefs/update`
							}, K._("Verify Email", null, {
								hk: "1893cq"
							}))) : o.a.createElement(Y, null, o.a.createElement(ue, {
								to: "/"
							}, K._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(oe, {
								onClick: t
							}, K._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(f, r, _)));
					case M.a.SubredditBanned:
						return o.a.createElement("div", null, o.a.createElement(le, {
							src: `${a.a.assetPath}/img/content-gate-icons/banned.png`
						}), o.a.createElement(pe, null, K._("r/{community name} has been banned from Reddit", [K._param("community name", y)], {
							hk: "2at9Se"
						})), (e => o.a.createElement(Q, null, e ? o.a.createElement(O, {
							linkClassName: W.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : K._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), o.a.createElement(Y, null, o.a.createElement(ne, {
							to: "/"
						}, K._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case M.a.SubredditBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(le, {
							src: `${a.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(pe, null, K._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), o.a.createElement(Y, null, o.a.createElement(ne, {
							to: "/"
						}, K._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case M.a.SubredditDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(ce, null), o.a.createElement(pe, null, K._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), o.a.createElement(Q, null, K._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), o.a.createElement(Y, null, f && o.a.createElement(ie, {
							eventSource: "content_gate"
						}), o.a.createElement(se, {
							to: "/"
						}, K._("Go Home", null, {
							hk: "49p4or"
						}))));
					case M.a.ProfileDoesNotExist:
					case M.a.ProfileDeleted:
					case M.a.ProfileSuspended:
					case M.a.ProfileBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(le, {
							src: `${a.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(pe, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case M.a.ProfileBlockedForLegalReason:
									return K._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case M.a.ProfileDeleted:
									return K._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case M.a.ProfileSuspended:
									return o.a.createElement(o.a.Fragment, null, K._("This account has been {=suspended} .", [K._param("=suspended", o.a.createElement(te, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, K._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case M.a.ProfileDoesNotExist:
									return o.a.createElement(o.a.Fragment, null, o.a.createElement(pe, null, K._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), o.a.createElement(Q, null, K._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), o.a.createElement(Y, null, o.a.createElement(se, {
							to: "/"
						}, K._("Go Home", null, {
							hk: "49p4or"
						}))));
					case M.a.CustomFeedDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(le, {
							src: `${a.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(pe, null, K._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), o.a.createElement(Y, null, o.a.createElement(se, {
							to: "/"
						}, K._("Go Home", null, {
							hk: "49p4or"
						}))));
					case M.a.PostBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(le, {
							src: `${a.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(pe, null, K._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), o.a.createElement(Y, null, o.a.createElement(ne, {
							to: "/"
						}, K._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = Ee(ve(Object(i.i)(e => {
				const t = Object(r.useContext)(l.a) ? V : J;
				return o.a.createElement(t, null, o.a.createElement("div", null, o.a.createElement(_e, null, ge(e))), o.a.createElement(x, null))
			})))
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(a.a)({
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
			t.a = r
		},
		"./src/reddit/components/CreateCommunityButton/index.m.less": function(e, t, n) {
			e.exports = {
				StyledTooltip: "FIYolDqalszTnjjNfThfT",
				styledTooltip: "FIYolDqalszTnjjNfThfT"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				l = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/constants/modals.ts"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				_ = n("./src/reddit/selectors/user.ts"),
				b = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				k = n.n(b),
				E = n("./src/lib/lessComponent.tsx");
			const v = "create-community-button",
				g = E.a.wrapped(u.c, "StyledTooltip", k.a),
				y = Object(i.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(_.hb)(e),
					userIsSuspended: _.P
				});
			t.a = Object(s.b)(y, (e, {
				eventSource: t
			}) => ({
				openCommunityCreation: n => {
					n(Object(p.c)(t)), e(Object(l.h)(m.a.SUBREDDIT_CREATION_MODAL_ID))
				},
				onShowTooltip: () => e(Object(c.f)({
					tooltipId: v
				})),
				onHideTooltip: () => e(Object(c.i)())
			}))(Object(d.c)(({
				className: e,
				eventSource: t,
				onShowTooltip: n,
				onHideTooltip: r,
				openCommunityCreation: s,
				sendEvent: i,
				userDoesNotHaveEnoughExpToCreateCommunity: l,
				userIsSuspended: c,
				onClick: u
			}) => {
				return o.a.createElement(h.q, {
					className: e,
					disabled: c || l,
					onClick: e => {
						u && u(e), s(i)
					},
					onMouseEnter: n,
					onMouseLeave: r,
					priority: h.b.Secondary,
					id: v,
					isFullWidth: !0
				}, a.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), l ? o.a.createElement(g, {
					caretOnTop: !0,
					tooltipId: v,
					text: a.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : c ? o.a.createElement(g, {
					caretOnTop: !0,
					tooltipId: v,
					text: a.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ContentGate.947284325f658a814982.js.map