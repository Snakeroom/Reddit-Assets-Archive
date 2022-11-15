// https://www.redditstatic.com/desktop2x/reddit-components-ModQueueActivitySummaryCards-ModActivityPreview.4383d0e35efbfd0823f9.js
// Retrieved at 11/15/2022, 10:10:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ModQueueActivitySummaryCards-ModActivityPreview"], {
		"./src/reddit/components/ModQueueActivitySummaryCards/ModActivityPreview.tsx": function(e, t, o) {
			"use strict";
			o.r(t);
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = o("./src/higherOrderComponents/asTooltip.tsx"),
				s = o("./src/lib/classNames/index.ts"),
				a = o("./src/lib/constants/index.ts"),
				r = o("./node_modules/react/index.js"),
				l = o.n(r),
				i = o("./node_modules/react-redux/es/index.js"),
				d = o("./src/reddit/actions/tooltip.ts"),
				c = o("./src/reddit/components/UserIcon/index.tsx"),
				u = o("./src/reddit/controls/Dropdown/index.tsx"),
				m = o("./src/reddit/endpoints/modQueue/modActivity.ts"),
				v = o("./src/reddit/helpers/graphql/helpers.ts"),
				b = o("./src/reddit/helpers/trackers/modListing.ts"),
				w = o("./src/reddit/hooks/useGqlContext.ts"),
				h = o("./src/reddit/hooks/useTracking.ts"),
				p = o("./src/reddit/selectors/modQueue.ts"),
				k = o("./src/reddit/selectors/platform.ts"),
				_ = o("./src/reddit/selectors/subreddit.ts"),
				f = o("./src/reddit/selectors/tooltip.ts"),
				g = o("./src/reddit/selectors/user.ts"),
				C = o("./src/reddit/components/ModQueueActivitySummaryCards/index.m.less"),
				A = o.n(C),
				S = o("./src/config.ts"),
				R = o("./node_modules/fbt/lib/FbtPublic.js"),
				j = o("./src/lib/timeAgo/index.ts"),
				y = o("./src/redditGQL/types.ts");
			const N = `${S.a.assetPath}/img/snoo-sunglasses.png`,
				O = e => {
					let {
						data: t
					} = e;
					var o, n, a, r, i, d, u;
					const m = (null === (o = t.info) || void 0 === o ? void 0 : o.displayName) || (null === (n = t.info) || void 0 === n ? void 0 : n.name),
						{
							lastModAction: b
						} = t;
					return l.a.createElement("div", {
						className: Object(s.a)(A.a.modRow, "hover:bg-neutral-background-hover"),
						onClick: e => {
							e.stopPropagation(), e.preventDefault()
						}
					}, l.a.createElement(c.a, {
						className: A.a.modIcon,
						userName: m || "",
						iconUrl: null === (r = null === (a = null == t ? void 0 : t.info) || void 0 === a ? void 0 : a.icon) || void 0 === r ? void 0 : r.url,
						isNSFW: !!(null === (d = null === (i = t.info) || void 0 === i ? void 0 : i.profile) || void 0 === d ? void 0 : d.isNsfw),
						style: {
							height: "24px",
							width: "24px"
						}
					}), l.a.createElement("div", {
						className: A.a.subredditRowText
					}, l.a.createElement("div", {
						className: Object(s.a)(A.a.username, "text-neutral-content-strong")
					}, m), l.a.createElement("div", {
						className: Object(s.a)(A.a.detailText, "text-neutral-content-weak")
					}, b && l.a.createElement(l.a.Fragment, null, ((e, t) => {
						switch (e) {
							case y.w.AddNote:
								return R.fbt._("Added mod note", null, {
									hk: "4EQdI3"
								});
							case y.w.AddRemovalReason:
								return R.fbt._("Added removal reason", null, {
									hk: "3sDuRA"
								});
							case y.w.AdjustPostCrowdControlLevel:
								return R.fbt._("Adjusted post crowd control level", null, {
									hk: "3Ru27s"
								});
							case y.w.EnablePostCrowdControlFilter:
								return R.fbt._("Enabled post crowd control level", null, {
									hk: "bnrbt"
								});
							case y.w.DisablePostCrowdControlFilter:
								return R.fbt._("Disabled post crowd control level", null, {
									hk: "3Pn8Cm"
								});
							case y.w.ApproveComment:
								return R.fbt._("Approved comment", null, {
									hk: "15N4AH"
								});
							case y.w.ApproveLink:
								return R.fbt._("Approved post", null, {
									hk: "2pHeO6"
								});
							case y.w.BanUser:
								return R.fbt._("Banned user", null, {
									hk: "30ZUto"
								});
							case y.w.Collections:
								return R.fbt._("Collections", null, {
									hk: "4DLN5q"
								});
							case y.w.DeleteNote:
								return R.fbt._("Deleted mod note", null, {
									hk: "24mUGI"
								});
							case y.w.Distinguish:
								return "SubredditPost" === t ? R.fbt._("Post distinguished", null, {
									hk: "1EzjPd"
								}) : R.fbt._("Comment distinguished", null, {
									hk: "3TNqQa"
								});
							case y.w.EditFlair:
								return "SubredditPost" === t ? R.fbt._("Post flair edited", null, {
									hk: "2oj67i"
								}) : R.fbt._("User flair edited", null, {
									hk: "2WAVS8"
								});
							case y.w.IgnoreReports:
								return "SubredditPost" === t ? R.fbt._("Post reports ignored", null, {
									hk: "1HbgCS"
								}) : R.fbt._("Comment reports ignored", null, {
									hk: "3eLRwL"
								});
							case y.w.Lock:
								return "SubredditPost" === t ? R.fbt._("Post locked", null, {
									hk: "45Huvj"
								}) : R.fbt._("Comment locked", null, {
									hk: "2HzroI"
								});
							case y.w.MarkNsfw:
								return R.fbt._("Marked post NSFW", null, {
									hk: "4qw3UI"
								});
							case y.w.MarkOriginalContent:
								return R.fbt._("Marked post Original Content", null, {
									hk: "4d9kgS"
								});
							case y.w.MuteUser:
								return R.fbt._("Muted user", null, {
									hk: "31YWRG"
								});
							case y.w.RemoveComment:
								return R.fbt._("Removed comment", null, {
									hk: "2qfmzC"
								});
							case y.w.RemoveLink:
								return R.fbt._("Removed post", null, {
									hk: "2leMij"
								});
							case y.w.SetContestMode:
								return R.fbt._("Set post contest mode", null, {
									hk: "2iE074"
								});
							case y.w.SetSuggestedsort:
								return R.fbt._("Set post suggested sort", null, {
									hk: "3zw33Q"
								});
							case y.w.ShowComment:
								return R.fbt._("Showed comment", null, {
									hk: "1xvaXS"
								});
							case y.w.SpamComment:
								return R.fbt._("Marked comment as spam", null, {
									hk: "E6CLe"
								});
							case y.w.SpamLink:
								return R.fbt._("Removed post as spam", null, {
									hk: "1Al2xz"
								});
							case y.w.Spoiler:
								return R.fbt._("Added spoiler tag", null, {
									hk: "254Axx"
								});
							case y.w.Sticky:
								return "SubredditPost" === t ? R.fbt._("Post stickied", null, {
									hk: "4m9DRx"
								}) : R.fbt._("Comment stickied", null, {
									hk: "1JIPzu"
								});
							case y.w.UnbanUser:
								return R.fbt._("Unbanned user", null, {
									hk: "3U4olT"
								});
							case y.w.Unlock:
								return "SubredditPost" === t ? R.fbt._("Post unlocked", null, {
									hk: "3IXrG"
								}) : R.fbt._("Comment unlocked", null, {
									hk: "4v2jmJ"
								});
							case y.w.UnmuteUser:
								return R.fbt._("Unmuted user", null, {
									hk: "2aB30x"
								});
							case y.w.UnsetContestMode:
								return R.fbt._("Unset post contest mode", null, {
									hk: "W4Yjf"
								});
							case y.w.UnsnoozeReports:
								return "SubredditPost" === t ? R.fbt._("Post unsnoozed", null, {
									hk: "3jp8zr"
								}) : R.fbt._("Comment unsnoozed", null, {
									hk: "2x01Eq"
								});
							case y.w.Unspoiler:
								return R.fbt._("Removed spoiler tag", null, {
									hk: "2GvhDn"
								});
							case y.w.Unsticky:
								return "SubredditPost" === t ? R.fbt._("Post unstickied", null, {
									hk: "KXoHl"
								}) : R.fbt._("Comment unstickied", null, {
									hk: "dpEKC"
								});
							case y.w.UpdateRemovalReason:
							case y.w.WikiBanned:
							case y.w.WikiContributor:
							case y.w.WikiPageListed:
							case y.w.WikiPermLevel:
							case y.w.WikiRevise:
							case y.w.WikiUnbanned:
							case y.w.AcceptModeratorInvite:
							case y.w.AddCommunityTopics:
							case y.w.AddContributor:
							case y.w.AddModerator:
							case y.w.CreateAward:
							case y.w.CreateScheduledPost:
							case y.w.CreateRemovalReason:
							case y.w.CommunityStyling:
							case y.w.CommunityWidgets:
							case y.w.CreateRule:
							case y.w.DeleteAward:
							case y.w.DeleteRule:
							case y.w.DeleteScheduledPost:
							case y.w.DeleteOverriddenClassification:
							case y.w.DeleteRemovalReason:
							case y.w.DisableAward:
							case y.w.EditPostRequirements:
							case y.w.EditRule:
							case y.w.EditScheduledPost:
							case y.w.EditSettings:
							case y.w.EnableAward:
							case y.w.Events:
							case y.w.HiddenAward:
							case y.w.InviteModerator:
							case y.w.InviteSubscriber:
							case y.w.ModAwardGiven:
							case y.w.ModmailEnrollment:
							case y.w.OverrideClassification:
							case y.w.RemoveCommunityTopics:
							case y.w.RemoveContributor:
							case y.w.RemoveModerator:
							case y.w.RemoveWikiContributor:
							case y.w.ReorderModerators:
							case y.w.ReorderRules:
							case y.w.SetPermissions:
							case y.w.SnoozeReports:
							case y.w.SubmitContentRatingSurvey:
							case y.w.SubmitScheduledPost:
							case y.w.UnignoreReports:
							case y.w.UninviteModerator:
							default:
								return R.fbt._("Last mod action", null, {
									hk: "S9AMb"
								})
						}
					})(null == b ? void 0 : b.action, null === (u = null == b ? void 0 : b.target) || void 0 === u ? void 0 : u.__typename), " ", Object(j.d)(Object(v.g)(b.createdAt) / 1e3)))))
				},
				x = e => {
					let {
						mostRecentAction: t
					} = e;
					return l.a.createElement("div", {
						className: A.a.emptyTooltip
					}, l.a.createElement("img", {
						alt: R.fbt._("Snoo face image", null, {
							hk: "35RYyE"
						}),
						src: N,
						className: A.a.snooImage
					}), l.a.createElement("div", {
						className: Object(s.a)(A.a.emptyText, "text-neutral-content-strong")
					}, R.fbt._("The queue is all yours", null, {
						hk: "16NnPV"
					})), l.a.createElement("div", {
						className: Object(s.a)(A.a.emptyDetailText, "text-neutral-content-weak")
					}, R.fbt._("We’ll let you know if another mod joins you in moderating the community.", null, {
						hk: "4EOUML"
					})), t && l.a.createElement("div", {
						className: A.a.lastActionContainer
					}, l.a.createElement("div", {
						className: Object(s.a)(A.a.lastActionTitle, "text-neutral-content-weak")
					}, R.fbt._("Last Action taken", null, {
						hk: "4F3ynJ"
					})), l.a.createElement(O, {
						data: t
					})))
				},
				E = e => {
					let {
						orderedModsList: t,
						subredditName: o,
						mods: n,
						mostRecentAction: a
					} = e;
					return 0 === t.length ? l.a.createElement(x, {
						mostRecentAction: a
					}) : l.a.createElement(l.a.Fragment, null, l.a.createElement("div", {
						className: Object(s.a)(A.a.tooltipTitle, "text-neutral-content-weak")
					}, t.length, " ", R.fbt._({
						"*": "mods active in r/",
						_1: "mod active in r/"
					}, [R.fbt._plural(t.length)], {
						hk: "3o3C52"
					}), o), n && t.slice(0, 10).map(e => l.a.createElement(O, {
						data: n[e],
						key: e
					})), t.length > 10 && l.a.createElement("div", {
						className: Object(s.a)(A.a.detailText, A.a.more, "text-neutrtal-content-weak")
					}, "+", t.length - 10, " ", R.fbt._("more active moderators", null, {
						hk: "13CPFV"
					})))
				},
				P = Object(n.a)(u.a),
				D = e => e ? Object.keys(e).sort((t, o) => ((e, t, o) => {
					var n, s, a, r;
					const l = null === (s = null === (n = o[e]) || void 0 === n ? void 0 : n.lastModAction) || void 0 === s ? void 0 : s.createdAt,
						i = null === (r = null === (a = o[t]) || void 0 === a ? void 0 : a.lastModAction) || void 0 === r ? void 0 : r.createdAt,
						d = Object(v.g)(l || "");
					return Object(v.g)(i || "") - d
				})(t, o, e)).filter(t => {
					var o, n;
					return (new Date).getTime() - Object(v.g)((null === (n = null === (o = e[t]) || void 0 === o ? void 0 : o.lastModAction) || void 0 === n ? void 0 : n.createdAt) || "") < 15 * a.pb
				}) : [];
			t.default = e => {
				let {
					className: t,
					subredditId: o,
					maxMods: n,
					isModqueue: a
				} = e;
				const u = Object(i.e)(k.c),
					v = o || u,
					C = Object(i.e)(e => Object(_.h)(e, {
						subredditId: v || ""
					})) || "",
					S = Object(i.e)(e => {
						var t;
						return (null === (t = null == e ? void 0 : e.features) || void 0 === t ? void 0 : t.modActivitySummaries[v || ""]) || {}
					}),
					{
						mods: R
					} = S,
					j = Object(r.useCallback)(e => D(e), [])(R),
					[y, N] = Object(r.useState)(void 0),
					O = Object(w.a)();
				Object(r.useEffect)(() => {
					(async () => {
						var e, t, o, n;
						if (0 === j.length && C) {
							const s = null === (t = null === (e = (await Object(m.c)(O(), {
								subredditName: C
							})).body.data) || void 0 === e ? void 0 : e.subreddit) || void 0 === t ? void 0 : t.moderation;
							(null == s ? void 0 : s.actions) && (null === (n = null === (o = s.actions) || void 0 === o ? void 0 : o.edges) || void 0 === n || n.map(e => {
								var t;
								const {
									moderatorInfo: o,
									...n
								} = null == e ? void 0 : e.node, s = null === (t = null == o ? void 0 : o.displayName) || void 0 === t ? void 0 : t.toLowerCase();
								"reddit" !== s && "automoderator" !== s && N({
									info: o,
									lastModAction: n
								})
							}))
						}
					})()
				}, [O, j.length, C]);
				const x = (e => `mod_activity_tooltip_id-${e}`)(C || ""),
					M = Object(i.d)(),
					U = Object(h.a)(),
					L = Object(r.useCallback)(e => {
						e.stopPropagation(), e.preventDefault(), M(Object(d.h)({
							tooltipId: x
						})), U(Object(b.a)(!!a, C))
					}, [M, x, U, C, a]),
					I = Object(i.e)(e => Object(f.b)(x)(e)),
					T = Object(i.e)(p.c),
					q = Object(i.e)(g.l),
					W = n || 5;
				return l.a.createElement("div", {
					className: Object(s.a)(A.a.preview, t),
					id: x,
					onClick: L,
					"data-testid": "mod-activity-preview"
				}, R && j.length > 0 ? j.slice(0, W).map((e, t) => {
					var o, n, a, r, i, d, u, m, v, b;
					return l.a.createElement(c.a, {
						className: Object(s.a)(A.a.userIcon, {
							[A.a.noMargin]: t === j.length - 1 && !(t === W - 1 && j.length > W)
						}),
						style: {
							height: "24px",
							width: "24px"
						},
						key: null === (n = null === (o = R[e]) || void 0 === o ? void 0 : o.info) || void 0 === n ? void 0 : n.displayName,
						userName: (null === (r = null === (a = R[e]) || void 0 === a ? void 0 : a.info) || void 0 === r ? void 0 : r.displayName) || "",
						iconUrl: null === (u = null === (d = null === (i = R[e]) || void 0 === i ? void 0 : i.info) || void 0 === d ? void 0 : d.icon) || void 0 === u ? void 0 : u.url,
						isNSFW: !!(null === (b = null === (v = null === (m = R[e]) || void 0 === m ? void 0 : m.info) || void 0 === v ? void 0 : v.profile) || void 0 === b ? void 0 : b.isNsfw)
					})
				}) : T ? null : l.a.createElement(c.a, {
					className: Object(s.a)(A.a.userIcon, A.a.noMargin),
					userName: (null == q ? void 0 : q.displayName) || "",
					iconUrl: null == q ? void 0 : q.accountIcon,
					isNSFW: !1,
					style: {
						height: "24px",
						width: "24px"
					}
				}), j.length > W && l.a.createElement("div", {
					className: Object(s.a)(A.a.moreMods, "text-neutral-content-weak")
				}, "+", j.length - W), l.a.createElement(P, {
					tooltipId: x,
					isOpen: I,
					className: A.a.tooltip,
					targetPosition: ["right", "bottom"],
					tooltipPosition: ["right", "top"]
				}, l.a.createElement(E, {
					orderedModsList: j,
					subredditName: C || "",
					mods: R,
					mostRecentAction: y
				})))
			}
		},
		"./src/reddit/components/ModQueueActivitySummaryCards/index.m.less": function(e, t, o) {
			e.exports = {
				widget: "_2S3Rmz2Q8AgpyxfJD6L9Ni",
				titleContainer: "pg3jNvZKVsr3JdwcUwg2Q",
				widgetContent: "k9g6oop3qzXe5kYHchR2G",
				modIcon: "_3_ODW9yvfhSXaAyu-nkEVf",
				subredditIcon: "_3xHqnRKD2oZKVSbBsrhnhK",
				modRow: "_5sL4TmBPDSK5a3KCST8_D",
				subredditRow: "_13BVggQ6qexDLjYZd0OF_G",
				subredditRowText: "_251DNBern7Si-he5HNkDm7",
				emptyCard: "_1Df-DRjGp1nY8gKsqVuIWB",
				emptyText: "_25rN30WWKtFVSZo9ZhYJLx",
				subredditName: "_1-JqcOMFgfEZRr9C1rwtvN",
				tooltipTitle: "Edh6iORXd4A_ZV0h1CB8j",
				username: "_3iBG4sU_nNewURNnz2rmHn",
				emptyDetailText: "_138KBSl-Hzt-QdKbcCX4tv",
				detailText: "_1rZ6aZqtR9nzTvKOqVb7dP",
				snooImage: "Vg69__zCqDdWEkb_CTQcn",
				headerButtonContainer: "EzEg04ghsOqxnE1GnfnIr",
				headerButtonIcon: "yga1BOrh_Ki70reuqnYLi",
				up: "B30eRoRGRtXKAX8-rAmXV",
				more: "_22P9QU0SjkaqhoKGnofYXo",
				preview: "_2akotn_qPD4--TkwhPFyTR",
				moreMods: "NbzlGrDvVUNrngQOyDY28",
				userIcon: "_1hC77l9y_LwLvok2bogZDP",
				noMargin: "_3K_wetbUvC8wNm6ueBwvh-",
				tooltip: "kRLDbyQSWoBrnkmHt5nmj",
				emptyTooltip: "_1yrR_PVgnpPVl0FS5aNxmY",
				lastActionContainer: "rU1nWYL0Qtmi0poIUJXmm",
				lastActionTitle: "_2bxj74obMqZ-SI9UrnCg7x"
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ModQueueActivitySummaryCards-ModActivityPreview.4383d0e35efbfd0823f9.js.map